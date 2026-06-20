---
title: 研究
layout: default
handle: /research
language: zh_HK
---

<div class="p-5 text-center bg-image bg-research-img">
  <div class="d-flex justify-content-start align-items-end h-100">
    <div class="text-white text-left">
      <h1 class="page-title mb-3">研究</h1>
    </div>
  </div>
</div>

<div class="content-wrapper">
  <div class="filter-section">
    <div class="auto-filter-tags">
      <button class="filter-tag btn btn-outline-primary active" data-filter="all">所有類型 (<span class="countall">0</span>)</button>
      <button class="filter-tag btn btn-outline-primary" data-filter="conference">會議文章 (<span class="count">0</span>)</button>
      <button class="filter-tag btn btn-outline-primary" data-filter="journal">期刊 (<span class="count">0</span>)</button>
      <button class="filter-tag btn btn-outline-primary" data-filter="patent">專利 (<span class="count">0</span>)</button>
      <button class="filter-tag btn btn-outline-primary" data-filter="preprint">預印本 (<span class="count">0</span>)</button>
    </div>
  </div>

  <div class="publication-list mt-4" id="publicationList"></div>
  
  <div class="pagination-wrapper d-flex justify-content-center mt-4">
    <nav aria-label="Publication pagination">
      <ul class="pagination" id="pagination"></ul>
    </nav>
  </div>
</div>

<script>
$(document).ready(function() {
  
  // 1. 直接從 _data/teams_i18n.yml 靜態編譯注入多語言配置
  const i18nConfig = {{ site.data.teams_i18n | jsonify }};

  const currentLang = "{{ page.language }}" || "en"; 
  const lang = i18nConfig[currentLang] ? i18nConfig[currentLang] : i18nConfig.en;

  const ITEMS_PER_PAGE = 10;
  let currentPage = 1;
  let currentFilter = 'all';

  // 2. 從改版後的 _data/publications.json 載入 Object 數據
  const rawPublicationsObj = {{ site.data.publications | jsonify }};

  // 將 4 個分組陣列合併展平成單一陣列，利於篩選和分頁
  const unsortedPublications = Object.values(rawPublicationsObj).flat();

  // 【核心時間排序邏輯】利用 year、month、day 拼裝成精準的 YYYY-MM-DD 進行字串倒序比對 (由近至遠)
  const publications = unsortedPublications.sort(function(a, b) {
    const pad = (str) => (str && str.length === 1) ? '0' + str : (str || '01');
    const dateA = (a.year || '0000') + '-' + pad(a.month) + '-' + pad(a.day);
    const dateB = (b.year || '0000') + '-' + pad(b.month) + '-' + pad(b.day);
    return dateB.localeCompare(dateA);
  });

  function countPublicationsByType() {
    return {
      all: publications.length,
      conference: publications.filter(pub => pub.type === 'conference').length,
      journal: publications.filter(pub => pub.type === 'journal').length,
      patent: publications.filter(pub => pub.type === 'patent').length,
      preprint: publications.filter(pub => pub.type === 'preprint').length
    };
  }

  function getLabelStyle(type) {
    const styleMap = {
      journal: 'badge bg-success',
      conference: 'badge bg-primary',
      preprint: 'badge bg-secondary',
      patent: 'badge bg-info text-dark',
    };
    return styleMap[type] || 'badge bg-secondary';
  }

  function updateFilterCounts() {
    const counts = countPublicationsByType();
    console.log(counts)
    $('.filter-tag[data-filter="all"]').find('.countall').text(counts.all);
    $('.filter-tag').each(function() {
      const type = $(this).data('filter');
      if (type !== 'all') {
        $(this).find('.count').text(counts[type] || 0);
      }
    });
  }

  // 3. 頁面資料渲染邏輯
  function renderPublications(filter = 'all', page = 1) {
    const $publicationList = $('#publicationList');
    $publicationList.empty();
    
    const filteredPublications = filter === 'all' ? publications : publications.filter(pub => pub.type === filter);
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedPublications = filteredPublications.slice(startIndex, endIndex);
    
    if(paginatedPublications.length === 0) {
      $publicationList.append('<p class="text-muted text-center py-4">No records found.</p>');
      updatePagination(0, 1);
      return;
    }

    paginatedPublications.forEach(pub => {
      const { type, link, metrics, year, month } = pub;
      const isDisabled = (link === '#') ? 'disabled-link text-decoration-none text-dark' : '';
      
      const localizedTitle = pub.title[currentLang] || pub.title['en'];
      const localizedSource = pub.source[currentLang] || pub.source['en'];
      const localizedAuthors = pub.authors[currentLang] || pub.authors['en'];

      // 自動將作者名單中的 Yalin Liu 加上 strong 標籤
      const highlightRegExp = new RegExp('(Yalin Liu)', 'gi');
      const highlightedAuthors = localizedAuthors.replace(highlightRegExp, '<strong>$1</strong>');

      // 格式化出版日期顯示為 Month Year
      let dateString = year;
      if (month && parseInt(month, 10) > 0) {
        dateString = lang.month[parseInt(month, 10) - 1] + ' ' + year;
      }

      let metricBadge = '';
      if(metrics && metrics.sci_if) {
        metricBadge += ` <span class="badge bg-warning text-dark">${lang.sciIf}: ${metrics.sci_if}</span>`;
      }
      if(metrics && metrics.jcr) {
        metricBadge += ` <span class="badge bg-dark">${lang.jcr}: ${metrics.jcr}</span>`;
      }

      const $item = $('<div class="card mb-3 shadow-sm border-start border-4 border-primary">')
        .append($('<div class="card-body">')
          .append($('<h5>').addClass('card-title')
            .append($('<a>').attr({'href': link, 'target': link === '#' ? '_self' : '_blank', 'class': isDisabled}).text(localizedTitle))
          )
          .append($('<div class="mb-2">')
            .append($('<span class="' + getLabelStyle(type) + ' me-2">').text(lang.labels[type] || type))
            .append(metricBadge)
          )
          .append($('<p class="card-text mb-1 text-muted">').html(highlightedAuthors))
          .append($('<p class="card-text mb-1 italic">').text(localizedSource))
          .append($('<p class="card-text text-secondary small">').text(lang.pubYear + dateString))
        );
        
      $item.appendTo($publicationList);
    });

    updatePagination(filteredPublications.length, page);
  }

  // 4. 動態分頁生成器
  function updatePagination(totalItems, activePage) {
    const $pagination = $('#pagination');
    $pagination.empty();
    
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    if (totalPages <= 1) return;

    const $prevLi = $('<li class="page-item">').toggleClass('disabled', activePage === 1);
    const $prevLink = $('<a class="page-link" href="#" aria-label="Previous">&laquo;</a>').on('click', function(e) {
      e.preventDefault();
      if (activePage > 1) {
        currentPage = activePage - 1;
        renderPublications(currentFilter, currentPage);
      }
    });
    $pagination.append($prevLi.append($prevLink));

    for (let i = 1; i <= totalPages; i++) {
      const $li = $('<li class="page-item">').toggleClass('active', i === activePage);
      const $link = $('<a class="page-link" href="#">').text(i).on('click', function(e) {
        e.preventDefault();
        currentPage = i;
        renderPublications(currentFilter, currentPage);
      });
      $pagination.append($li.append($link));
    }

    const $nextLi = $('<li class="page-item">').toggleClass('disabled', activePage === totalPages);
    const $nextLink = $('<a class="page-link" href="#" aria-label="Next">&raquo;</a>').on('click', function(e) {
      e.preventDefault();
      if (activePage < totalPages) {
        currentPage = activePage + 1;
        renderPublications(currentFilter, currentPage);
      }
    });
    $pagination.append($nextLi.append($nextLink));
  }

  $('.filter-tag').on('click', function() {
    $('.filter-tag').removeClass('active btn-primary').addClass('btn-outline-primary');
    $(this).addClass('active btn-primary').removeClass('btn-outline-primary');
    
    currentFilter = $(this).data('filter');
    currentPage = 1; 
    renderPublications(currentFilter, currentPage);
  });

  updateFilterCounts();
  renderPublications('all', currentPage);
});
</script>
