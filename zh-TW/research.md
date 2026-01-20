---
title: 研究
layout: default
handle: /research
language: zh-TW
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
      <button class="filter-tag" data-filter>所有類型 (<span class="countall">0</span>)</button>
      <button class="filter-tag" data-filter="conference">會議文章 (<span class="count">0</span>)</button>
      <button class="filter-tag" data-filter="journal">期刊 (<span class="count">0</span>)</button>
      <button class="filter-tag" data-filter="patent">專利 (<span class="count">0</span>)</button>
      <button class="filter-tag" data-filter="preprint">預印本 (<span class="count">0</span>)</button>
    </div>
    <div class="pagination" id="pagination"></div>
  </div>
  <div class="publication-list" id="publicationList">
    <!-- <div data-tags="js,css"><a href="https://www.jqueryscript.net/tags.php?/Bootstrap/">Bootstrap</a></div>
    <div data-tags="js">Angular</div>
    <div data-tags="html,css">TailwindCSS</div>
    <div data-tags="js">jQuery</div>
    <div data-tags="js,html">React.js</div>
    <div data-tags="js">Vue.js</div> -->
  </div>
</div>

<script>
$(document).ready(function() {
  $.autofilter({

    // CSS class when shown
    showClass: 'show',

    // CSS class when active
    activeClass: 'active',

    // use HTML as filter string
    htmlAsFilter: false,

    // filter string as substring
    subString: false,

    // minimum characters to start filter in input mode
    minChars: 3,

    // is case sensitive?
    caseSensitive: false,

    // enable animation
    animation: true,

    // duration in ms
    duration: 0,

    // default filter on page load
    // this value must match the data-filter attribute value of a filter trigger element
    default: false,

    // name of the query parameter used to filter
    urlSearchParam: false,
    
  });

  // JavaScript array to store publications
  let publications = [
    { title: "面向內容感知、支援 RSMA 的 6G 網路延遲優化縮減天線系統", type: "journal", authors: "Yu Hua, 付雅茹, 劉亞林, Zheng Shi, 熊景輝", source: "arXiv preprint: 2512.17332, 2026", year: "2026", link: "https://arxiv.org/pdf/2512.17332" },
    { title: "針對夾持天線輔助隱蔽反向散射通訊的上行鏈路速率最大化", type: "journal", authors: "王玉磊, 劉亞林, 付雅茹, Yuanwei Liu", source: "arXiv preprint: 2512.10970", year: "2026", link: "https://arxiv.org/pdf/2512.10970" },
    { title: "用於室內沉浸式通信的夾持天線系統：基於 3D 模型的性能分析", type: "preprint", authors: "王玉磊, 劉亞林, 付雅茹, Zhuguo Ding", source: "arXiv preprint arXiv:2506.07771", year: "2026", link: "https://arxiv.org/pdf/2506.07771" },
    { title: "蜂巢和基於 D2D 的異構物聯網中資訊整合和通信的隨機幾何分析", type: "journal", authors: "王玉磊, Li Feng, 劉亞林, Zhongjie Li", source: "計算機網絡", year: "2024", link: "https://www.sciencedirect.com/science/article/pii/S1389128625000945" },
    { title: "考慮可靠性的行動群智感知系統聯合優化", type: "journal", authors: "Jiahui Feng, 付雅茹, Zheng Shi, 劉亞林, 熊景輝", source: "IEEE Transactions on Cognitive Communications and Networking", year: "2024", link: "https://ieeexplore.ieee.org/abstract/document/10764779" },
    { title: "空天地一體化網絡：基於球面隨機幾何的上行鏈路連通性分析", type: "journal", authors: "劉亞林, 戴弘寧, 王曲北劍, Om Jee Pandey, 付雅茹, Ning Zhang, Dusit Niyato, 李至沖", source: "IEEE Journal on Selected Areas in Communications", year: "2024", link: "https://ieeexplore.ieee.org/document/10438999" },
    { title: "無人機輔助無線回程網絡：上行鏈路傳輸的連通性分析", type: "journal", authors: "劉亞林, 王秋, 戴弘寧, 付雅茹, Ning Zhang, 李至沖", source: "IEEE Transactions on Vehicular Technology", year: "2023", link: "https://ieeexplore.ieee.org/document/10104142" },
    { title: "基於無人機的無線供能式物聯網：機遇和挑戰", type: "journal", authors: "劉亞林, 戴弘寧, 王皓, Muhammad Imran, Nadra Guizani", source: "IEEE Network", year: "2022", link: "https://ieeexplore.ieee.org/document/9762455" },
    { title: "增強數據選擇器發起基於文本的驗證碼攻擊", type: "journal", authors: "車奧林, 劉亞林, Hong Xiao, 王皓, Ke Zhang, 戴弘寧", source: "Security and Communication Networks", year: "2021", link: "https://www.hindawi.com/journals/scn/2021/9930608/" },
    { title: "無人機賦能萬物互聯：機遇和挑戰", type: "journal", authors: "劉亞林, 戴弘寧, 王曲北劍, Mahendra K. Shukla, Muhammad Imran", source: "計算機通信", year: "2020", link: "https://www.sciencedirect.com/science/article/pii/S0140366419318754" },
    { title: "面對物聯網場景下基於無人機的無線供能式數據採集方案", type: "journal", authors: "劉亞林, 戴弘寧, 王皓, Muhammad Imran, Xiaofen Wang, Muhammad Shoaib", source: "計算機通信", year: "2020", link: "https://www.sciencedirect.com/science/article/pii/S0140366419304852" },
    { title: "無人機輔助的物聯網通信技術及其應用", type: "journal", authors: "劉亞林, 戴弘寧, 王曲北劍", source: "物聯網學報（中國）", year: "2019", link: "https://www.henrylab.net/wp-content/uploads/2020/02/UEeIoT-CIoTJ19.pdf" },
    
    // conference
    { title: "針對反應式干擾器的欺騙：用深度強化學習實現自適應抗干擾（已錄用）", type: "conference", authors: "Xintai Cao, Qubeijian Wang, Xiuping Li, Wen Sun, 劉亞林", source: "IEEE International Conference on Communications (ICC) (EI and CCF C conference)", year: "2026", link: "#" },
    { title: "針對速率最大化的多波導收縮天線佈局優化（已錄用）", type: "conference", authors: "Yue Zhang, 付雅茹，Pei Liu, 劉亞林, 熊景輝", source: "IEEE International Conference on Communications (ICC) (EI and CCF C conference)", year: "2026", link: "https://arxiv.org/pdf/2512.18711" },
    { title: "面向順序MIoT工作流程的雲-霧-邊協同運算：基於雙層DDPG的調度框架（最佳論文獎）", type: "conference", authors: "傅宇浩, Yinghao Zhang, 劉亞林, 陶畢生輝, Junhong Ruan", source: "International Conference on Networks, Communications and Intelligent Computing (NCIC) (Ei Compendex and Scopus), Jiaozuo, China", year: "2025", link: "https://arxiv.org/pdf/2510.21135" },
    { title: "基於置信度約束的雲邊協作框架用於自閉症譜系障礙診斷", type: "conference", authors: "鄧琪, Yinghao Zhang, 劉亞林, 陶畢生輝", source: "International Conference on Networks, Communications and Intelligent Computing (NCIC) (EI conference), Jiaozuo, China", year: "2025", link: "https://arxiv.org/pdf/2510.21130" },
    { title: "Web3 DID 的混合衛星-地面部署：系統設計與效能分析", type: "conference", authors: "劉亞林, Zhigang Yan, Bingyuan Luo, Xiaochi Xu, 戴弘寧, 付雅茹, 陶畢生輝, 歐陽兆基", source: "IEEE MetaCom 2025", year: "2025", link: "https://arxiv.org/pdf/2507.02305" },
    { title: "提高移動群智感知效率：一種覆蓋感知資源分配方法", type: "conference", authors: "付雅茹, Yue Zhang, Zheng Shi, Yongna Guo, 劉亞林", source: "The 2025 101st IEEE Vehicular Technology Conference (VTC2025-Spring), Oslo, Norway", year: "2025", link: "https://arxiv.org/pdf/2503.21942" },
    { title: "用於飛行器中繼地空衛星連接的 3D 隨機幾何模型", type: "conference", authors: "王玉磊, 劉亞林, 付雅茹, Yujie Qin, Zhontgjie Li", source: "The 2025 IEEE 101st Vehicular Technology Conference (VTC2025-Spring), Oslo, Norway", year: "2025", link: "https://arxiv.org/pdf/2503.16202" },
    { title: "空天地一體化網絡中六種跨層場景的統一網絡建模", type: "conference", authors: "劉亞林, 付雅茹, 王曲北劍, 戴弘寧", source: "IEEE International Conference on Communications 2025 (IEEE ICC 2025) (EI and CCF C conference)", year: "2025", link: "https://arxiv.org/pdf/2504.21284" },
    { title: "下一代移動群智感知網絡的子帶和感知任務分配：最優框架", type: "conference", authors: "付雅茹, Yue Zhang, Zheng Shi, Hong Wang, 劉亞林", source: "IEEE 無線通信和網絡會議 (WCNC) (EI and CCF C conference)", year: "2024", link: "#" },
    { title: "非地面網絡中無人機對衛星通信的連接性分析（英文版）", type: "conference", authors: "劉亞林, 戴弘寧, Ning Zhang", source: "IEEE全球通信會議(GLEBECOM) (EI and CCF C conference)", year: "2021", link: "https://github.com/yalin-liu/yalin-liu.github.io/blob/ac92780f706900d9da2079947c9eeec5fb317105/papers/A2S%20GloCom.pdf" },
    { title: "空中之耳：防止空中竊聽的地面移動干擾（英文版）", type: "conference", authors: "王曲北劍, 劉亞林, 戴弘寧, Muhammad Imran, Nidal Nasser", source: "IEEE全球通信會議(Globecom) (EI and CCF C conference)", year: "2021", link: "#" },
    { title: "地對無人機通信網絡：基於隨機幾何的性能分析（英文版）", type: "conference", authors: "劉亞林, 戴弘寧, Muhammad Imran, Nidal Nasser", source: "IEEE國際通信會議(Globecom) (EI and CCF C conference)", year: "2021", link: "https://github.com/yalin-liu/yalin-academic/blob/4c682e1a003864ffb4a826131beab179963baa59/papers/SGG2U.pdf" },
    { title: "海報：帶定向無線能量傳輸的支持無人機的數據採集方案", type: "conference", authors: "劉亞林, 戴弘寧, 彭宇陽, 王皓", source: "嵌入式無線系統和網絡國際會議（EWSN）", year: "2019", link: "https://github.com/yalin-liu/yalin-academic/blob/517ff5d24a5fa74da5a7ebe9110e15de7d988c01/papers/EWSN-liu.pdf" },
    { title: "情緒辨識系統及方法", type: "patent", authors: "Yalin Liu", source: "香港教育大學，專利號：HK30074872", year: "2023", link: "#" },
  ];

  const ITEMS_PER_PAGE = 999;
  let currentPage = 1;
  let currentFilter = 'all';

  // Function to count publications by type
  function countPublicationsByType() {
    const counts = {
      all: publications.length,
      conference: publications.filter(pub => pub.type === 'conference').length,
      journal: publications.filter(pub => pub.type === 'journal').length,
      patent: publications.filter(pub => pub.type === 'patent').length,
      preprint: publications.filter(pub => pub.type === 'preprint').length
    };
    return counts;
  }

  function getLabelType(type) {
    const typeObj = {
      journal: 'badge bg-success',
      conference: 'badge bg-primary',
      preprint: 'badge bg-secondary',
      patent: 'badge bg-info',
    };
    return typeObj[type] ?? 'badge bg-secondary';
  }

  // Function to update filter tag counts
  function updateFilterCounts() {
    const counts = countPublicationsByType();
    $('.filter-tag').find('.countall').text(counts['all'] || 0);
    $('.filter-tag').each(function() {
      const type = $(this).data('filter');
      $(this).find('.count').text(counts[type] || 0);
    });
  }
  
  // Function to render publications for the current page
  function renderPublications(filter = 'all', page = 1) {
    const $publicationList = $('#publicationList');
    $publicationList.empty();
    const filteredPublications = filter === 'all' ? publications : publications.filter(pub => pub.type === filter);
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedPublications = filteredPublications.slice(startIndex, endIndex);
    paginatedPublications.forEach(pub => {
      const { type, link } = pub;
      const linkIsDisabled = (link === '#')? 'btn disabled border-0 p-0' : '';
      const $item = $('<div class="publication-item">')
        .attr('data-tags', type)
        .append($('<a>').attr({'href': pub.link, "target": "_blank", "class": linkIsDisabled}).text(pub.title))
        .append($('<br>'))
        .append($('<span class="'+getLabelType(type)+'">').text(type.charAt(0).toUpperCase() + type.slice(1)))
        .append($('<br>'))
        .append($('<span>').text(pub.authors))
        .append($('<br>'))
        .append($('<span>').text(pub.source))
        .append($('<br>'))
        .append($('<span>').text('Publication year: ' + pub.year));
      $item.appendTo($publicationList);
    });
    // updatePagination(filteredPublications.length, page);
  }

  // Function to update pagination
  // function updatePagination(totalItems, currentPage) {
  //   const $pagination = $('#pagination');
  //   $pagination.empty();
  //   const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  //   for (let i = 1; i <= totalPages; i++) {
  //     const $pageButton = $('<button class="page-btn">').text(i).on('click', () => {
  //       currentPage = i;
  //       renderPublications(currentFilter, currentPage);
  //       $('.page-btn').removeClass('active');
  //       $pageButton.addClass('active');
  //     });

  //     if (i === currentPage) {
  //       $pageButton.addClass('active');
  //     }

  //     $pagination.append($pageButton);
  //   }
  // }

  // Handle tag clicks to set filter
  $('.filter-tag').on('click', function() {
    const filterType = $(this).data('filter');
    $('.auto-filter-tags').autoFilter('filter', filterType);
    $('.filter-tag').removeClass('active');
    $(this).addClass('active');
  });

  updateFilterCounts();
  renderPublications('all', currentPage);
  $('.filter-tag[data-filter="all"]').addClass('active');
});
</script>
