---
title: 聯絡方式
layout: default
handle: /contact
language: zh-TW
---

<div class="p-5 text-center bg-image bg-research-img">
  <div class="d-flex justify-content-start align-items-end h-100">
    <div class="text-white text-left">
      <h1 class="page-title mb-3">聯絡方式</h1>
    </div>
  </div>
</div>

<div class="content-wrapper" id="contact-container"></div>

<script>
$(document).ready(function() {
  const currentLang = "{{ page.language }}" || "en"; 
  const contactData = {{ site.data.contact | jsonify }};
  const $container = $('#contact-container');
  $container.empty();

  contactData.forEach(item => {
    const localizedLabel = item.label[currentLang] || item.label['en'];

    let localizedValue = "";
    if (typeof item.value === 'object') {
      localizedValue = item.value[currentLang] || item.value['en'];
    } else {
      localizedValue = item.value;
    }
    
    let contentHtml = '';
    if (item.link) {
      contentHtml = `<a href="${item.link}" title="${item.title}" target="_blank">${localizedValue}</a>`;
    } else {
      contentHtml = localizedValue;
    }

    const $p = $('<p></p>').append(
      `<i class="fa ${item.icon} mr-2"></i>\n`,
      `${localizedLabel}：`,
      contentHtml
    );

    $container.append($p);
  });
});
</script>