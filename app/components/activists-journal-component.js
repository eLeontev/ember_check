import Component from '@ember/component';
import Ember from 'ember';

const phoneNumber = [{
    hasDefaultValue: true,
    defaultValue: 8
},
{
    hasDefaultValue: true,
    defaultValue: 9
},
{
    hasDefaultValue: true,
    defaultValue: 2
},
{
    hasDefaultValue: true,
    defaultValue: 0
}, {},  {},  {},  {},  {},  {},  {},  {},
];

const numbers = new Array(10).fill('').map((e, i) => i);

export default Component.extend({
    user: 'user',
    showError: false,
    showContext: false,
    chanceToShowMessage: .25,
    initials: 'величайший костылеприменитель, \r\n несравненный велосипедостроитель,\r\n абсолютного фичестрадатель,\r\n  его высокопродоронятельство скарабей релизокататель семиустный',
    birthPLace: 'Мультивселенная 13А892B, 9е крыло трансгрессирующей моли, планета Земля, Россия, 7ое кольцо МКАДа, глубокое Подмосковье, г. Рязань, ул. Гоголя, д. 16',
    loadAvatarErrorMessage: 'Интеллигентная система распознавания образов нижайше просит прощения за недоставленные удобства',
    isAvatarLoaderBlocked: true,
    imgUrl: '',
    workplaces: ['отдел Шкодства'],
    expectedWorkspace: 'отдел Шкодства',
    workspaceError: 'к ношению рабочей шапки не пригоден',
    phoneNumber: phoneNumber,
    numbers: numbers,
    goalsService: Ember.inject.service('goals-status-service'),
    actions: {
        onSelectUserHandler: function () {
            setTimeout(() => {
                if(Math.random() > 1 - this.chanceToShowMessage) {
                    this.set('showContext', true)
                } else {
                    this.set('showError', true)
                }
            }, 0)
        },
        onLoadAvatarHandler: function ({currentTarget}) {
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
            }
        },
        onChangeWorkPlaceHandler: function (select) {
            if (select.value !== this.expectedWorkspace) {
                select.value = '';
                alert(this.workspaceError)
            }
        },
        onChooseNumberHandler: function (select) {
            const value = +select.value;
            const index = +select.className.split('_')[1];
            const chosenNumber = this.phoneNumber[index];

            if (chosenNumber.hasDefaultValue && chosenNumber.defaultValue !== value) {
                select.value = '';
            }
        },
        onSaveAction: function () {
            // TODO add validation
            this.get('goalsService').changeStatus(1)
        }
    }

});
