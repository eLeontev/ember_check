import Service from '@ember/service';

export default Service.extend({
    chosenName: '',
    gruidWasChosen: false,
    firstStateDone: false,
    secondStateDone: false,
    showLog: false,
    showPinkCats: false,
    goals: [
        {
            label: 'зарегистрировать в журнале судного дна',
            isDone: false,
            index: 1,
            id: 0
        },
        {
            label: 'добавить в журнал активных пакостников жизнедеятельности',
            isDone: false,
            index: 2,
            id: 1,
        },
        {
            label: 'сделать хорошо',
            isDone: false,
            index: 3,
            id: 2,
        }
    ],
    getListOfGoals() {
        return this.goals
    },
    changeStatus(_id) {
        this.set('goals', this.goals.map(({label, id, isDone, index}) => ({id, index, label, isDone: _id === id ? true : isDone })))

        switch(_id) {
        case 0:
            this.set('firstStateDone', true);
            break;
        case 1:
            this.set('secondStateDone', true);
            break
        }
    },
    onChoseGruid() {
        this.set('gruidWasChosen', true)
    },
    setUserName(userName) {
        this.set('chosenName', userName)
    },
    showLogPage() {
        this.set('showLog', true)
    },
    getAccessPinkCats() {
        this.set('showPinkCats', true);
    }
});
