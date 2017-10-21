import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return {
            title: 'Самые популярные активности',
            listOfActivities: [
                {
                    label: 'Регистрационный журнал судного дна',
                    link: 'cms.Judgment_bottom',
                },
                {
                    label: 'Список сайтов рекомендованных к просмотру галакомобзором',
                    link: 'cms.recommended_sites',
                },
                {
                    label: 'Сделать Хорошо',
                    link: 'cms.do_well',
                },
                {
                    label: 'Журналь активных пакостников жизнедеятельности',
                    link: 'cms.activists_journal',
                },
                {
                    label: 'текущий статус экспансии розовых котят нинзя',
                },
                {
                    label: 'план QA Open',
                    link: 'cms.qa_plan',
                },
                {
                    label: 'Список активных демиургов',
                    link: 'cms.demiurge',
                },
                {
                    label: 'Список мероприятий по улучшению мультивселенной',
                    link: 'cms.improvments_list',
                },
                {
                    label: 'Регистрационный журнал регистраций регистрируемых частей тела сущностей',
                    link: 'cms.log',
                },
            ],
        }
    }
});
