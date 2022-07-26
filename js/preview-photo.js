const FILE_TYPES = ['jpg', 'jpeg', 'png', 'gif'];

const AVATAR_DEFAULT = {
  DESCRIPTION: 'Фото',
  SRC: 'img/muffin-grey.svg',
};

const PREVIEW_WIDTH = 70;
const PREVIEW_HEIGHT = 70;
const MUFFIN_WIDTH = 40;
const MUFFIN_HEIGHT = 44;

const form = document.querySelector('.ad-form');

const avatarForm = form.querySelector('.ad-form-header__input');
const avatarPreviewForm = form.querySelector('.ad-form-header__preview img');

const photoForm = form.querySelector('.ad-form__input');
const photoPreviewForm = form.querySelector('.ad-form__photo').appendChild(document.createElement('img'));

const resetPreview = () => {
  avatarPreviewForm.src = AVATAR_DEFAULT.SRC;
  avatarPreviewForm.width = MUFFIN_WIDTH;
  avatarPreviewForm.height = MUFFIN_HEIGHT;
  photoPreviewForm.remove();
};

const renderPreview = (fileChoose, previewElement) => {
  fileChoose.addEventListener('change', () => {
    const file = fileChoose.files[0];
    const fileName = file.name.toLowerCase();
    const rightType = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (rightType) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        previewElement.width = PREVIEW_WIDTH;
        previewElement.height = PREVIEW_HEIGHT;
        previewElement.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
};

renderPreview(avatarForm, avatarPreviewForm);
renderPreview(photoForm, photoPreviewForm);

export {
  resetPreview
};
