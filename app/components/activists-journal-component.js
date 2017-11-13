import Component from '@ember/component';
import Ember from 'ember';

const phoneNumber = [ {},  {},  {isManually: true},  {},  {},  {},  {},  {}];

const numbers = new Array(10).fill('').map((e, i) => i);

const convertDate = (date) => {
    const yyyy = date.getFullYear().toString();
    const mm = (date.getMonth()+1).toString();
    const dd  = date.getDate().toString();

    const mmChars = mm.split('');
    const ddChars = dd.split('');

    return yyyy + '-' + (mmChars[1] ? mm: '0' + mmChars[0]) + '-' + (ddChars[1] ? dd: '0' + ddChars[0]);
}

const tomorrow = convertDate(new Date(new Date().getTime() + 24 * 60 * 60 * 1000));

export default Component.extend({
    isSaveDisabled: true,
    showError: false,
    showContext: false,
    dateField: tomorrow,
    chanceToShowMessage: 1,
    initials: 'величайший костылеприменитель, \r\n несравненный велосипедостроитель,\r\n абсолютного фичестрадатель,\r\n  его высокопродоронятельство скарабей релизокататель семиустный',
    birthPLace: 'Мультивселенная 13А892B, 9е крыло трансгрессирующей моли, планета Земля, Россия, 7ое кольцо МКАДа, глубокое Подмосковье, г. Рязань, ул. Гоголя, д. 16',
    loadAvatarErrorMessage: 'Интеллигентная система распознавания образов нижайше просит прощения за недоставленные удобства',
    isAvatarLoaderBlocked: true,
    imgUrl: '',
    workplaces: ['Вселенский отдел наказания и подчинения цифр', 'Отдел велосипедных креационистов', 'Отдел начинающих Астаротистов', 'отдел Шкодства', 'Отдел генерации безумно гениальных идей', 'Тайный отдел зачистки катастропедных последствий', 'Отдел табличных шебуршунчиков'],
    expectedWorkspace: 'отдел Шкодства',
    workspaceError: 'к ношению рабочей шапки не пригоден',
    phoneNumber: phoneNumber,
    numbers: numbers,
    goalsService: Ember.inject.service('goals-status-service'),
    actions: {
        onSelectUserHandler() {
            setTimeout(() => {
                if(Math.random() > 1 - this.chanceToShowMessage) {
                    this.set('showContext', true)
                } else {
                    this.set('showError', true)
                }
            }, 0)
        },
        onLoadAvatarHandler({currentTarget}) {
            if (this.isAvatarLoaderBlocked) {
                this.set('isAvatarLoaderBlocked', false);
                alert(this.loadAvatarErrorMessage);
                currentTarget.value = '';
                return
            }

            const files = currentTarget.files;
            const img = files && files[0];

            if (img) {
                const reader = new FileReader();
                reader.onload = ({target: result}) => this.set('imgUrl', result.result);
                reader.readAsDataURL(img);

                this.set('imageLoaded', true);

                this.actions.enableSaveButton.call(this);
            }
        },
        enableSaveButton() {
            const numberFully = this.phoneNumber.every((item) => item.chosen)

            if (this.imageLoaded && this.workloadChosen && numberFully) {
                this.set('isSaveDisabled', false)
            }
        },
        onChangeWorkPlaceHandler(select) {
            if (select.value !== this.expectedWorkspace) {
                select.value = '';
                alert(this.workspaceError)
            } else {
                this.set('workloadChosen', true);
                this.actions.enableSaveButton.call(this);
            }
        },
        onChooseNumberHandler(event) {
            const key = event.key === undefined ? event.value : event.key;
            const className = event.target ? event.target.className : event.className;
            const index = +className.split('_')[1];

            this.set('phoneNumber', this.phoneNumber.map((item, i) => ({
                item,
                isManually: item.isManually,
                chosen: i === index ? true: item.chosen,
                value: i === index ? key: item.value,
                showError: index === 3 && index === i ? true: item.showError
            })));
            this.actions.enableSaveButton.call(this);
        },
        onSaveAction() {
            alert('Существо добавлено!');
            this.get('goalsService').changeStatus(1)
        }
    }

});
