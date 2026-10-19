// Shared presentation rules for the Resume list and Research cards.
window.publicationDisplay = {
  localize(value, language) {
    return typeof value === 'object' && value !== null
      ? (value[language] || value.en || '') : (value || '');
  },
  escape(value) {
    return String(value).replace(/[&<>"']/g, character => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[character]));
  },
  hasLink(item) {
    return Boolean(item.link && item.link !== '#');
  },
  dateParts(value) {
    if (!value || typeof value !== 'string') return null;
    const months = ['january', 'february', 'march', 'april', 'may', 'june',
      'july', 'august', 'september', 'october', 'november', 'december'];
    const iso = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    const written = value.match(/^(\d{1,2})(?:\s*[-–]\s*\d{1,2})?\s+([A-Za-z]+),?\s+(\d{4})$/);
    if (!iso && !written) return null;
    const year = Number(iso ? iso[1] : written[3]);
    const month = iso ? Number(iso[2]) : months.indexOf(written[2].toLowerCase()) + 1;
    const day = Number(iso ? iso[3] : written[1]);
    const timestamp = Date.UTC(year, month - 1, day);
    const date = new Date(timestamp);
    if (!month || date.getUTCFullYear() !== year || date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) return null;
    return { year, month, day, timestamp };
  },
  compareByDate(a, b) {
    // Conference ranges sort by their first day; missing dates sort last.
    const first = this.dateParts(a.type === 'conference' ? a.date_of_conference : a.date_of_publication);
    const second = this.dateParts(b.type === 'conference' ? b.date_of_conference : b.date_of_publication);
    if (!first || !second) return Number(Boolean(second)) - Number(Boolean(first));
    return second.timestamp - first.timestamp;
  },
  date(value, language, monthOnly = false) {
    if (!value || language === 'en') return value || '';
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'];
    const iso = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    const written = value.match(/^(\d{1,2})(?:\s*[-–]\s*(\d{1,2}))?\s+([A-Za-z]+),?\s+(\d{4})$/);
    let year, month, firstDay, lastDay;
    if (iso) {
      [, year, month, firstDay] = iso;
      month = Number(month);
    } else if (written) {
      [, firstDay, lastDay, , year] = written;
      month = months.findIndex(name => name.toLowerCase() === written[3].toLowerCase()) + 1;
    }
    if (!year || !month) return value;
    const prefix = `${year}年${month}月`;
    return monthOnly ? prefix : `${prefix}${Number(firstDay)}${lastDay ? `—${Number(lastDay)}` : ''}日`;
  },
  place(value, language) {
    if (!value || language === 'en') return value || '';
    const places = {
      "Xi'an, China": ['中国西安', '中國西安'],
      'Macau, China': ['中国澳门', '中國澳門'],
      'Hong Kong, China': ['中国香港', '中國香港'],
      'Athens, Greece': ['希腊雅典', '希臘雅典'],
      'Chengdu, China': ['中国成都', '中國成都'],
      'Glasgow, Scotland, UK': ['英国苏格兰格拉斯哥', '英國蘇格蘭格拉斯哥'],
      'Jiaozuo, China': ['中国焦作', '中國焦作'],
      'Sejong University, Seoul': ['首尔，世宗大学', '首爾，世宗大學'],
      'Oslo, Norway': ['挪威奥斯陆', '挪威奧斯陸'],
      'Montreal, Canada': ['加拿大蒙特利尔', '加拿大蒙特利爾'],
      'Conrad, Dubai': ['迪拜，Conrad', '杜拜，Conrad'],
      'Madrid, Spain, virtual conference': ['西班牙马德里（线上会议）', '西班牙馬德里（網上會議）'],
      'Montreal, Quebec, Canada, virtual conference': ['加拿大魁北克省蒙特利尔（线上会议）', '加拿大魁北克省蒙特利爾（網上會議）'],
      'Beijing, China': ['中国北京', '中國北京']
    };
    return places[value] ? places[value][language === 'zh_TW' ? 1 : 0] : value;
  },
  impactFactor(value, language) {
    if (!value || language === 'en') return value || '';
    return value.replace(/^(\S+) in (\d{4})$/, '$1（$2年）');
  },
  citation(value, language, articleNumber) {
    if (!value || language === 'en') return value || '';
    const page = language === 'zh_TW' ? '頁' : '页';
    if (articleNumber) {
      const label = language === 'zh_TW' ? '文章編號：' : '文章编号：';
      value = value.replace(`pp. ${articleNumber}`, `${label}${articleNumber}`);
    }
    return value.replace(/vol\.\s*([\d-]+)/g, '第$1卷')
      .replace(/no\.\s*([\d-]+)/g, '第$1期')
      .replace(/pp\.\s*([\d-]+)/g, `第$1${page}`)
      .replace(/, /g, '，');
  },
  extra(value, language) {
    if (!value || language === 'en') return value || '';
    return value.replace(/\(Google scholar citations: (\d+)\)/i,
      language === 'zh_TW' ? '（Google Scholar 引用次數：$1）' : '（Google Scholar 引用次数：$1）');
  },
  quotedTitle(title, language) {
    return language === 'en' ? `"${title},"` : `「${title}」，`;
  },
  link(item, language) {
    if (!this.hasLink(item)) return '';
    const label = this.localize(item.link_label, language)
      || ({ zh_CN: '论文链接', zh_TW: '論文連結' }[language] || 'Link');
    return `[<a href="${this.escape(item.link)}" target="_blank" rel="noopener noreferrer">${this.escape(label)}</a>]`;
  },
  correction(item, language) {
    const note = this.localize(item.correction_note, language);
    return note ? `<p class="publication-correction small mt-2 mb-0">* ${this.escape(note)}</p>` : '';
  }
};
