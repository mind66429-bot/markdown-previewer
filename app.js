const editor = document.getElementById('editor');
const preview = document.getElementById('preview');
const stats = document.getElementById('stats');

function parseMarkdown(md) {
  return md
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    .replace(/`(.*?)`/gim, '<code>$1</code>')
    .replace(/^\- (.*$)/gim, '<li>$1</li>')
    .replace(/\n\n/gim, '<br/><br/>');
}

function update() {
  const text = editor.value;
  preview.innerHTML = parseMarkdown(text);
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  stats.textContent = `${words} word${words === 1 ? '' : 's'}`;
}

editor.addEventListener('input', update);
update();
