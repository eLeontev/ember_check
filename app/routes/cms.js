import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return {
            title: 'Самые популярные активности',
            listOfActivities: [
                {
                    id: 0,
                    label: 'Регистрационный журнал судного дна',
                    link: 'cms.Judgment_bottom',
                },
                {
                    id: 1,
                    label: 'Список сайтов рекомендованных к просмотру галакомобзором',
                    link: 'cms.recommended_sites',
                },
                {
                    id: 2,
                    label: 'Сделать Хорошо',
                    link: 'cms.do_well',
                },
                {
                    id: 3,
                    label: 'Журналь активных пакостников жизнедеятельности',
                    link: 'cms.activists_journal',
                },
                {
                    id: 10,
                    label: 'текущий статус экспансии розовых котят нинзя',
                    link: 'cms.pink-cats',
                },
                {
                    id: 4,
                    label: 'план QA Open',
                    link: 'cms.qa_plan',
                },
                {
                    id: 9,
                    label: 'Каталог вселенских тайн Мормонов',
                    link: 'cms.mormons-secrets',
                },
                {
                    id: 5,
                    label: 'Список активных демиургов',
                    link: 'cms.demiurge',
                },
                {
                    id: 6,
                    label: 'Список мероприятий по улучшению мультивселенной',
                    link: 'cms.improvments_list',
                },
                {
                    id: 7,
                    label: 'Регистрационный журнал регистраций регистрируемых частей тела сущностей',
                    link: 'cms.log',
                },
                {
                    id: 8,
                    label: 'BA Sprint',
                    through: true,
                }

            ],
        }
    }
});
