---
title: 研究
layout: default
handle: /research
language: zh-CN
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
      <button class="filter-tag" data-filter>所有类型 (<span class="countall">0</span>)</button>
      <button class="filter-tag" data-filter="conference">會議文章 (<span class="count">0</span>)</button>
      <button class="filter-tag" data-filter="journal">期刊 (<span class="count">0</span>)</button>
      <button class="filter-tag" data-filter="patent">专利 (<span class="count">0</span>)</button>
      <button class="filter-tag" data-filter="preprint">预印本 (<span class="count">0</span>)</button>
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
    { title: "用于室内沉浸式通信的夹持天线系统：基于 3D 模型的性能分析", type: "preprint", authors: "王玉磊, 刘亚林, 付雅茹, Zhuguo Ding", source: "arXiv preprint arXiv:2506.07771", year: "2026", link: "https://arxiv.org/pdf/2506.07771" },
    { title: "蜂窝和基于 D2D 的异构物联网中信息集成和通信的随机几何分析", type: "journal", authors: "王玉磊, Li Feng, 刘亚林, Zhongjie Li", source: "计算机网络", year: "2024", link: "https://www.sciencedirect.com/science/article/pii/S1389128625000945" },
    { title: "考慮可靠性的行動群智感知系統聯合優化", type: "journal", authors: "Jiahui Feng, 付雅茹, Zheng Shi, 刘亚林, 熊景輝", source: "IEEE Transactions on Cognitive Communications and Networking", year: "2024", link: "https://ieeexplore.ieee.org/abstract/document/10764779" },
    { title: "空天地一体化网络：基于球面随机几何的上行链路连通性分析", type: "journal", authors: "刘亚林, 戴弘宁, 王曲北剑, Om Jee Pandey, 付雅茹, Ning Zhang, Dusit Niyato, 李至冲", source: "IEEE Journal on Selected Areas in Communications", year: "2024", link: "https://ieeexplore.ieee.org/document/10438999" },
    { title: "无人机辅助无线回程网络：上行链路传输的连通性分析", type: "journal", authors: "刘亚林, 王秋, 戴弘宁, 付雅茹, Ning Zhang, 李至冲", source: "IEEE Transactions on Vehicular Technology", year: "2023", link: "https://ieeexplore.ieee.org/document/10104142" },
    { title: "基于无人机的无线供能式物联网：机遇和挑战", type: "journal", authors: "刘亚林, 戴弘宁, 王皓, Muhammad Imran, Nadra Guizani", source: "IEEE Network", year: "2022", link: "https://ieeexplore.ieee.org/document/9762455" },
    { title: "增强数据选择器发起基于文本的验证码攻击", type: "journal", authors: "车奥林, 刘亚林, Hong Xiao, 王皓, Ke Zhang, 戴弘宁", source: "Security and Communication Networks", year: "2021", link: "https://www.hindawi.com/journals/scn/2021/9930608/" },
    { title: "无人机赋能万物互联：机遇和挑战", type: "journal", authors: "刘亚林, 戴弘宁, 王曲北剑, Mahendra K. Shukla, Muhammad Imran", source: "计算机通信", year: "2020", link: "https://www.sciencedirect.com/science/article/pii/S0140366419318754" },
    { title: "面对物联网场景下基于无人机的无线供能式数据采集方案", type: "journal", authors: "刘亚林, 戴弘宁, 王皓, Muhammad Imran, Xiaofen Wang, Muhammad Shoaib", source: "计算机通信", year: "2020", link: "https://www.sciencedirect.com/science/article/pii/S0140366419304852" },
    { title: "无人机辅助的物联网通信技术及其应用", type: "journal", authors: "刘亚林, 戴弘宁, 王曲北剑", source: "物联网学报（中国）", year: "2019", link: "https://www.henrylab.net/wp-content/uploads/2020/02/UEIoT-CIoTJ19.pdf" },

    // Conference
    { title: "面向顺序MIoT工作流程的云-雾-边协同运算：基于双层DDPG的调度框架（最佳论文奖）", type: "conference", authors: "傅宇浩, Yinghao Zhang, 刘亚林, 陶毕生辉, Junhong Ruan", source: "International Conference on Networks, Communications and Intelligent Computing (NCIC) (Ei Compendex and Scopus), Jiaozuo, China", year: "2025", link: "https://arxiv.org/pdf/2510.21135" },
    { title: "基于置信度约束的云边协作框架用于自闭症谱系障碍诊断", type: "conference", authors: "邓琪, Yinghao Zhang, 刘亚林, 陶毕生辉", source: "International Conference on Networks, Communications and Intelligent Computing (NCIC) (EI conference), Jiaozuo, China", year: "2025", link: "https://arxiv.org/pdf/2510.21130" },
    { title: "Web3 DID 的混合衛星-地面部署：系统设计与效能分析", type: "conference", authors: "刘亚林, Zhigang Yan, Bingyuan Luo, Xiaochi Xu, 戴弘宁, 付雅茹, 陶畢生輝, 歐陽兆基", source: "IEEE MetaCom 2025", year: "2025", link: "https://arxiv.org/pdf/2507.02305" },
    { title: "提高移动群智感知效率：一种覆盖感知资源分配方法", type: "conference", authors: "付雅茹, Yue Zhang, Zheng Shi, Yongna Guo, 刘亚林", source: "The 2025 101st IEEE Vehicular Technology Conference (VTC2025-Spring), Oslo, Norway", year: "2025", link: "https://arxiv.org/pdf/2503.21942" },
    { title: "用于飞行器中继地空卫星连接的 3D 随机几何模型", type: "conference", authors: "王玉磊, 刘亚林, 付雅茹, Yujie Qin, Zhontgjie Li", source: "The 2025 IEEE 101st Vehicular Technology Conference (VTC2025-Spring), Oslo, Norway", year: "2025", link: "https://arxiv.org/pdf/2503.16202" },
    { title: "天空地一体化网络中六种跨层场景的统一网络建模", type: "conference", authors: "刘亚林, 付雅茹, 王曲北剑, 戴弘宁", source: "IEEE International Conference on Communications 2025 (IEEE ICC 2025) (EI and CCF C conference)", year: "2025", link: "https://arxiv.org/pdf/2504.21284" },
    { title: "下一代移动群智感知网络的子带和感知任务分配：最优框架", type: "conference", authors: "付雅茹, Yue Zhang, Zheng Shi, Hong Wang, 刘亚林", source: "IEEE 无线通信和网络会议 (WCNC) (EI and CCF C conference)", year: "2024", link: "#" },
    { title: "非地面网络中无人机对卫星通信的连接性分析（英文版）", type: "conference", authors: "刘亚林, 戴弘宁, Ning Zhang", source: "IEEE全球通信会议(GLEBECOM) (EI and CCF C conference)", year: "2021", link: "https://github.com/yalin-liu/yalin-liu.github.io/blob/ac92780f706900d9da2079947c9eeec5fb317105/papers/A2S%20GloCom.pdf" },
    { title: "空中之耳：防止空中窃听的地面移动干扰（英文版）", type: "conference", authors: "王曲北剑, 刘亚林, 戴弘宁, Muhammad Imran, Nidal Nasser", source: "IEEE全球通信会议(Globecom) (EI and CCF C conference)", year: "2021", link: "#" },
    { title: "地对无人机通信网络：基于随机几何的性能分析（英文版）", type: "conference", authors: "刘亚林, 戴弘宁, Muhammad Imran, Nidal Nasser", source: "IEEE国际通信会议(Globecom) (EI and CCF C conference)", year: "2021", link: "https://github.com/yalin-liu/yalin-academic/blob/4c682e1a003864ffb4a826131beab179963baa59/papers/SGG2U.pdf" },
    { title: "海报：带定向无线能量传输的支持无人机的数据采集方案", type: "conference", authors: "刘亚林, 戴弘宁, 彭宇阳, 王皓", source: "嵌入式无线系统和网络国际会议（EWSN）", year: "2019", link: "https://github.com/yalin-liu/yalin-academic/blob/517ff5d24a5fa74da5a7ebe9110e15de7d988c01/papers/EWSN-liu.pdf" },
    { title: "情绪识别系统及方法", type: "patent", authors: "Yalin Liu", source: "香港教育大学，专利号：HK30074872", year: "2023", link: "#" },
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
