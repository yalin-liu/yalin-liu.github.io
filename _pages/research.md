---
title: Research
layout: default
handle: /research
language: en
---

<div class="p-5 text-center bg-image bg-research-img">
    <div class="d-flex justify-content-start align-items-end h-100">
      <div class="text-white text-left">
        <h1 class="page-title mb-3">Research</h1>
      </div>
    </div>
</div>

<div class="content-wrapper">
  <div class="filter-section">
    <div class="auto-filter-tags">
      <button class="filter-tag" data-filter>All types (<span class="countall">0</span>)</button>
      <button class="filter-tag" data-filter="conference">Conference (<span class="count">0</span>)</button>
      <button class="filter-tag" data-filter="journal">Journal (<span class="count">0</span>)</button>
      <button class="filter-tag" data-filter="patent">Patent (<span class="count">0</span>)</button>
      <button class="filter-tag" data-filter="preprint">Preprint (<span class="count">0</span>)</button>
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
    { title: "Pinching-Antenna Systems For Indoor Immersive Communications: A 3D-Modeling Based Performance Analysis", type: "preprint", authors: "Yulei Wang, Yalin Liu, Yaru Fu, Zhuguo Ding", source: "arXiv preprint arXiv:2506.07771", year: "2026", link: "https://arxiv.org/pdf/2506.07771" },
    { title: "Stochastic geometry analysis for information integration and communication in cellular and D2D-based heterogeneous IoT", type: "journal", authors: "Yulei Wang, Li Feng, Yalin Liu, Zhongjie Li", source: "Computer Networks", year: "2024", link: "https://www.sciencedirect.com/science/article/pii/S1389128625000945" },
    { title: "Joint Optimization for Mobile Crowdsensing Systems With Reliability Consideration", type: "journal", authors: "Jiahui Feng, Yaru Fu, Zheng Shi, Yalin Liu, Kevin Hung", source: "IEEE Transactions on Cognitive Communications and Networking", year: "2024", link: "https://ieeexplore.ieee.org/abstract/document/10764779" },
    { title: "Space-Air-Ground Integrated Networks: Spherical Stochastic Geometry-Based Uplink Connectivity Analysis", type: "journal", authors: "Yalin Liu, Hong-Ning Dai, Qubeijian Wang, Om Jee Pandey, Yaru Fu, Ning Zhang, Dusit Niyato, Chi Chung Lee", source: "IEEE Journal on Selected Areas in Communications (SCI IF=17.2 in 2024, JCR Q1)", year: "2024", link: "https://ieeexplore.ieee.org/document/10438999" },
    { title: "UAV-Assisted Wireless Backhaul Networks: Connectivity Analysis of Uplink Transmissions", type: "journal", authors: "Yalin Liu, Qiu Wang, Hong-Ning Dai, Yaru Fu, Ning Zhang, Chi Chung Lee", source: "IEEE Transactions on Vehicular Technology", year: "2023", link: "https://ieeexplore.ieee.org/document/10104142" },
    { title: "Wireless Powering Internet of Things with UAVs: Challenges and Opportunities", type: "journal", authors: "Yalin Liu, Hong-Ning Dai, Hao Wang, Muhammad Imran, Nadra Guizani", source: "IEEE Network", year: "2022", link: "https://ieeexplore.ieee.org/document/9762455" },
    { title: "Augmented data selector to initiate text-based CAPTCHA attack", type: "journal", authors: "Aolin Che, Yalin Liu, Hong Xiao, Hao Wang, Ke Zhang, Hong-Ning Dai", source: "Security and Communication Networks", year: "2021", link: "https://www.hindawi.com/journals/scn/2021/9930608/" },
    { title: "Unmanned aerial vehicle for internet of everything: Opportunities and challenges", type: "journal", authors: "Yalin Liu, Hong-Ning Dai, Qubeijian Wang, Mahendra K. Shukla, Muhammad Imran", source: "Computer Communications", year: "2020", link: "https://www.sciencedirect.com/science/article/pii/S0140366419318754" },
    { title: "UAV-enabled data acquisition scheme with directional wireless energy transfer for Internet of Things", type: "journal", authors: "Yalin Liu, Hong-Ning Dai, Hao Wang, Muhammad Imran, Xiaofen Wang, Muhammad Shoaib", source: "Computer Communications", year: "2020", link: "https://www.sciencedirect.com/science/article/pii/S0140366419304852" },
    { title: "Unmanned aerial vehicle enabled communication technologies and applications for Internet of things", type: "journal", authors: "Yalin Liu, Hong-Ning Dai, Qubeijian Wang", source: "Chinese Journal on Internet of Things (Chinese)", year: "2019", link: "https://www.henrylab.net/wp-content/uploads/2020/02/UEIoT-CIoTJ19.pdf" },

    // Conference
    { title: "Cloud-Fog-Edge Collaborative Computing for Sequential MIoT Workflow: A Two-Tier DDPG-Based Scheduling Framework (Best paper award)", type: "conference", authors: "Yuhao Fu, Yinghao Zhang, Yalin Liu, Bishenghui Tao, Junhong Ruan", source: "International Conference on Networks, Communications and Intelligent Computing (NCIC) (Ei Compendex and Scopus), Jiaozuo, China", year: "2025", link: "https://arxiv.org/pdf/2510.21135" },
    { title: "A Confidence-Constrained Cloud-Edge Collaborative Framework for Autism Spectrum Disorder Diagnosis", type: "conference", authors: "Qi Deng, Yinghao Zhang, Yalin Liu, Bishenghui Tao", source: "International Conference on Networks, Communications and Intelligent Computing (NCIC) (EI conference), Jiaozuo, China", year: "2025", link: "https://arxiv.org/pdf/2510.21130" },
    { title: "Hybrid Satellite-Ground Deployments for Web3 DID: System Design and Performance Analysis", type: "conference", authors: "Yalin Liu, Zhigang Yan, Bingyuan Luo, Xiaochi Xu, Hong-Ning Dai, Yaru Fu, Bishenghui Tao, Siu-Kei Au Yeung", source: "IEEE MetaCom 2025", year: "2025", link: "https://arxiv.org/pdf/2507.02305" },
    { title: "Enhancing Mobile Crowdsensing Efficiency: A Coverage-aware Resource Allocation Approach", type: "conference", authors: "Yaru Fu, Yue Zhang, Zheng Shi, Yongna Guo, Yalin Liu", source: "The 2025 101st IEEE Vehicular Technology Conference (VTC2025-Spring), Oslo, Norway", year: "2025", link: "https://arxiv.org/pdf/2503.21942" },
    { title: "3D Stochastic Geometry Model for Aerial Vehicle-Relayed Ground-Air-Satellite Connectivity", type: "conference", authors: "Yulei Wang, Yalin Liu, Yaru Fu, Yujie Qin, Zhontgjie Li", source: "The 2025 IEEE 101st Vehicular Technology Conference (VTC2025-Spring), Oslo, Norway", year: "2025", link: "https://arxiv.org/pdf/2503.16202" },
    { title: "Unified Network Modeling for Six Cross-Layer Scenarios in Space-Air-Ground Integrated Networks", type: "conference", authors: "Yalin Liu, Yaru Fu, Qubeijian Wang, Hong-Ning Dai", source: "IEEE International Conference on Communications 2025 (IEEE ICC 2025) (EI and CCF C conference)", year: "2025", link: "https://arxiv.org/pdf/2504.21284" },
    { title: "Subband and Sensing Task Allocation for Next-Generation Mobile Crowdsensing Networks: An Optimal Framework", type: "conference", authors: "Yaru Fu, Yue Zhang, Zheng Shi, Hong Wang, Yalin Liu", source: "IEEE Wireless Communications and Networking Conference (WCNC) (EI and CCF C concference)", year: "2024", link: "#" },
    { title: "Connectivity Analysis of UAV-To-Satellite Communications in Non-Terrestrial Networks", type: "conference", authors: "Yalin Liu, Hong-Ning Dai, Ning Zhang", source: "IEEE Global Communications Conference (Globecom) (EI and CCF C conference)", year: "2021", link: "https://github.com/yalin-liu/yalin-liu.github.io/blob/ac92780f706900d9da2079947c9eeec5fb317105/papers/A2S%20GloCom.pdf" },
    { title: "Ear in the Sky: Terrestrial Mobile Jamming to Prevent Aerial Eavesdropping", type: "conference", authors: "Qubeijian Wang, Yalin Liu, Hong-Ning Dai, Muhammad Imran, Nidal Nasser", source: "IEEE Global Communications Conference (Globecom) (EI and CCF C conference)", year: "2021", link: "#" },
    { title: "Ground-to-UAV Communication Network: Stochastic Geometry-based Performance Analysis", type: "conference", authors: "Yalin Liu, Hong-Ning Dai, Muhammad Imran, Nidal Nasser", source: "IEEE International Conference of Communications (ICC) (EI and CCF C conference)", year: "2021", link: "https://github.com/yalin-liu/yalin-academic/blob/4c682e1a003864ffb4a826131beab179963baa59/papers/SGG2U.pdf" },
    { title: "Poster: UAV-enabled Data Acquisition Scheme with Directional Wireless Energy Transfer", type: "conference", authors: "Yalin Liu, Hong-Ning Dai, Yuyang Peng, Hao Wang", source: "International Conference on Embedded Wireless Systems and Networks (EWSN)", year: "2019", link: "https://github.com/yalin-liu/yalin-academic/blob/517ff5d24a5fa74da5a7ebe9110e15de7d988c01/papers/EWSN-liu.pdf" },
    { title: "Emotion recognition system and method", type: "patent", authors: "Yalin Liu", source: "The Education University of Hong Kong, under patent No. HK30074872", year: "2023", link: "#" },
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
  function updateFilterCounts(){
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
