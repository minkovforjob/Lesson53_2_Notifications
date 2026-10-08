// Реализовать всплывающие уведомления: уведомление должно вызываться с помощью функции “конструктора” уведомления, которая принимает название, текст и тип уведомления(успех, предупреждение, ошибка).

// Сверстать форму, после отправки которой появляется уведомление о том, что заказ успешно создан, а также появляются 3 кнопки: “Заказ оплачен”, “Заказ отправлен”, “Заказ получен”, при нажатии на которые появляется уведомление с соответствующим сообщением.

// это на GitHub кидаем

// https://jsbin.com/ceperucelo/edit?output

// [{},{},{}...]
const notificationObject = {
    id: 1,
    title: "String",
    type: "success",
    info: "description",
};

class Notificatios {
    static total = 0;
    static notificatiosList = [];
    constructor() {
        this.id = Math.random();
        this.title = title;
        this.type = type; // Success - green | Info - yellow | Error - red
        this.info = info;
        Notificatios.total++;
    }

    static renderNotificatios(List) { };
    static deleteNotificatios(id) { };
}

// const n1 = new Notificatios("New sldj", "dljfsl", "skdksjd");