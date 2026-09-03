const select = document.getElementById('fontSelect');
const paragraphInput = document.getElementById('paragraphInput');
const changedParagraph = document.getElementById('changedParagraph');
const copyButton = document.getElementById('copyButton');
const copyStatus = document.getElementById('copyStatus');

function updateParagraph() {
  changedParagraph.textContent = paragraphInput.value;
  changedParagraph.style.fontFamily = select.value;
}

select.addEventListener('change', updateParagraph);
paragraphInput.addEventListener('input', updateParagraph);

copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(changedParagraph.textContent);
    copyStatus.textContent = 'Paragraph copied.';
  } catch {
    copyStatus.textContent = 'Copy failed. Please select the paragraph and copy it manually.';
  }
});

updateParagraph();
