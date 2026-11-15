(() => {
  'use strict';

  const categories = window.PROMPT_CATEGORIES || [];
  const prompts = window.PROMPT_CARDS || [];
  const followups = window.FOLLOWUP_PROMPTS || [];
  const tabs = document.getElementById('category-tabs');
  const list = document.getElementById('prompt-list');
  const followupGrid = document.getElementById('followups');
  const toast = document.getElementById('toast');
  let activeCategory = 'all';
  let toastTimer;

  function element(tag, className, content) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (content !== undefined) node.textContent = content;
    return node;
  }

  function buildPrompt(card, selected) {
    return card.template.replace(/\{(\w+)\}/g, (whole, key) => selected[key] ?? whole);
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('visible'), 4500);
  }

  async function copyText(text) {
    try {
      if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard API unavailable');
      await navigator.clipboard.writeText(text);
      showToast('✅ 복사했어요! ChatGPT를 열고 입력칸을 길게 눌러 ‘붙여넣기’를 선택하세요.');
      return true;
    } catch (_) {
      // Older mobile browsers and file:// URLs may need a fallback.
      const field = element('textarea', 'copy-fallback');
      field.value = text;
      field.setAttribute('readonly', '');
      document.body.append(field);
      field.focus();
      field.select();
      field.setSelectionRange(0, field.value.length);
      let copied = false;
      try { copied = document.execCommand('copy'); } catch (_) { /* Not supported */ }
      field.remove();
      showToast(copied
        ? '✅ 복사했어요! ChatGPT의 입력칸을 길게 눌러 ‘붙여넣기’를 선택하세요.'
        : '복사하지 못했어요. 화면에 보이는 질문을 길게 눌러 직접 복사해 주세요.');
      return copied;
    }
  }

  function renderCategories() {
    tabs.replaceChildren();
    categories.forEach(category => {
      const button = element('button', 'category-button', `${category.icon} ${category.label}`);
      button.type = 'button';
      button.setAttribute('aria-pressed', String(category.id === activeCategory));
      if (category.id === activeCategory) button.classList.add('active');
      button.addEventListener('click', () => {
        activeCategory = category.id;
        renderCategories();
        renderCards();
      });
      tabs.append(button);
    });
  }

  function renderCards() {
    list.replaceChildren();
    const visibleCards = prompts.filter(card => activeCategory === 'all' || card.category === activeCategory);
    if (!visibleCards.length) {
      list.append(element('p', 'empty-message', '이 주제의 질문은 준비 중이에요.'));
      return;
    }

    visibleCards.forEach(card => {
      const selected = Object.fromEntries(card.fields.map(field => [field.key, field.options[0]]));
      const article = element('article', 'prompt-card');
      article.id = `card-${card.id}`;
      const heading = element('div', 'card-heading');
      const picture = element('span', 'card-emoji', card.icon);
      picture.setAttribute('aria-hidden', 'true');
      const headingCopy = element('div');
      const title = element('h3', '', card.title);
      const desc = element('p', '', card.description);
      headingCopy.append(title, desc);
      heading.append(picture, headingCopy);
      article.append(heading);

      const form = element('div', 'field-grid');
      let preview;
      const updatePreview = () => { preview.textContent = buildPrompt(card, selected); };
      card.fields.forEach((field, fieldIndex) => {
        const group = element('div', 'field-group');
        const label = element('label', '', field.label);
        const select = element('select', 'prompt-select');
        const selectId = `${card.id}-${field.key}`;
        select.id = selectId;
        label.htmlFor = selectId;
        field.options.forEach(option => {
          const optionNode = element('option', '', option);
          optionNode.value = option;
          select.append(optionNode);
        });
        select.value = selected[field.key];
        select.addEventListener('change', () => {
          selected[field.key] = select.value;
          updatePreview();
        });
        group.append(label, select);
        form.append(group);
      });
      article.append(form);

      const previewBox = element('div', 'preview-box');
      const previewTitle = element('span', 'preview-label', '✨ 완성된 질문');
      preview = element('p', 'preview-text');
      preview.setAttribute('aria-live', 'polite');
      updatePreview();
      previewBox.append(previewTitle, preview);
      article.append(previewBox);

      const actions = element('div', 'card-actions');
      const copyButton = element('button', 'action-button copy-button', '📋 질문 복사하기');
      copyButton.type = 'button';
      copyButton.addEventListener('click', () => copyText(buildPrompt(card, selected)));
      const chatLink = element('a', 'action-button chat-button', '💬 ChatGPT 열기 ↗');
      chatLink.href = 'https://chatgpt.com/';
      chatLink.target = '_blank';
      chatLink.rel = 'noopener noreferrer';
      chatLink.setAttribute('aria-label', 'ChatGPT 새 창에서 열기');
      actions.append(copyButton, chatLink);
      article.append(actions);
      article.append(element('p', 'paste-hint', '복사한 뒤 ChatGPT 입력칸을 길게 누르고 ‘붙여넣기’를 선택하세요.'));
      if (card.caution) article.append(element('p', 'card-caution', `🔎 ${card.caution}`));
      list.append(article);
    });
  }

  function renderFollowups() {
    followupGrid.replaceChildren();
    followups.forEach(text => {
      const button = element('button', 'followup-button');
      button.type = 'button';
      const prompt = element('span', '', text);
      const copyLabel = element('span', 'followup-copy', '복사');
      button.append(prompt, copyLabel);
      button.addEventListener('click', () => copyText(text));
      followupGrid.append(button);
    });
  }

  renderCategories();
  renderCards();
  renderFollowups();
})();
