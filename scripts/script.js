
// Реализовать всплывающие уведомления: 
// уведомление должно вызываться с помощью функции “конструктора” уведомления, 
// которая принимает название, текст и тип уведомления(успех, предупреждение, ошибка).

// Сверстать форму, после отправки которой появляется уведомление о том, 
// что заказ успешно создан, а также появляются 3 кнопки: 
// “Заказ оплачен”, “Заказ отправлен”, “Заказ получен”, 
// при нажатии на которые появляется уведомление с соответствующим сообщением.

// это на GitHub кидаем

// https://jsbin.com/ceperucelo/edit?output

const orderForm = document.querySelector(".orderForm");
const orderButtons = document.querySelector(".orderButtons");
const notificationAllContainer = document.querySelector(".notificationAllContainer");
const paidBtn = document.querySelector(".paidBtn");
const sentBtn = document.querySelector(".sentBtn");
const recievedBtn = document.querySelector(".recievedBtn");
const errorBtn = document.querySelector(".errorBtn");


// [{},{},{}...
const arrNotif = [];
const notificationObject = {
    id: 1,
    title: "String",
    type: "success",
    info: "description",
};

class Notificatios {
    static total = 0;
    static notificatiosList = [];
    constructor(title, type, info) {
        this.id = Math.floor(Math.random() * 100);
        this.title = title;
        this.type = type; // Success - green | Info - yellow | Error - red
        this.info = info;
        Notificatios.total++;
    }


    static delNotif(idNotif) {
        console.log("idNotif = " + idNotif);
        let ind = -1;
        console.log(arrNotif.length);
        for (let i = 0; i < arrNotif.length - 1; i++) {
            if (idNotif == arrNotif[i].id) {
                console.log(arrNotif[i]);
                ind = i; break;
            }
        };
        console.log(ind);
        arrNotif.splice(ind, 1);

        Notificatios.renderNotificatios(arrNotif);
    }


    static renderNotificatios(List) {
        notificationAllContainer.replaceChildren();
        arrNotif.forEach((el) => {


            const contOneNotif = document.createElement("div");

            contOneNotif.classList.add("contOneNotif");
            // contOneNotif.setAttribute("class", "contOneNotif");
            contOneNotif.classList.add(el.type);
            contOneNotif.dataset.id = el.id;
            const notifInfo = document.createElement("div");
            notifInfo.setAttribute("class", "notifInfo");
            const title = document.createElement("h4");
            title.setAttribute("class", "title");
            title.textContent = el.title;
            const info = document.createElement("span");
            info.setAttribute("class", "info");
            info.textContent = el.info;

            const delOneNotif = document.createElement("button")
            delOneNotif.setAttribute("class", "delNotif");
            delOneNotif.textContent = "X";
            delOneNotif.addEventListener("click", (event) => {
                Notificatios.delNotif(event.target.closest(".contOneNotif").dataset.id);
            });
            notifInfo.append(title, info,);
            contOneNotif.append(notifInfo, delOneNotif);
            notificationAllContainer.prepend(contOneNotif);
        });
    };
    static deleteNotificatios(id) { };
}

orderForm.addEventListener("submit", (event) => {
    event.preventDefault(); // предотвратить дефолтное поведение 
    orderButtons.classList.remove("hidden");
    const n1 = new Notificatios("Заказ создан", "Success", "Ваш заказ был создан и скоро попадет в обработку");
    arrNotif.push(n1);
    console.log(arrNotif);
    Notificatios.renderNotificatios(arrNotif);
});

paidBtn.addEventListener("click", () => {
    const n2 = new Notificatios("Заказ оплачен", "Info", "Подтверждаем оплату заказа и приступаем к его сборке");
    arrNotif.push(n2);
    console.log(arrNotif);
    Notificatios.renderNotificatios(arrNotif);
})

sentBtn.addEventListener("click", () => {
    const n3 = new Notificatios("Заказ отправлен", "Info", "Заказ был собран и теперь направляется к Вам");
    arrNotif.push(n3);
    console.log(arrNotif);
    Notificatios.renderNotificatios(arrNotif);
})


recievedBtn.addEventListener("click", () => {
    const n4 = new Notificatios("Заказ получен", "Info", "Заказ был получен. Будем ждать новых заказов от Вас");
    arrNotif.push(n4);
    console.log(arrNotif);
    Notificatios.renderNotificatios(arrNotif);
})

errorBtn.addEventListener("click", () => {
    const n5 = new Notificatios("Ошибка", "Error", "К сожалению что-то пошло не так. Мы уже разбираемся и свяжемся с Вами в ближайшее время");
    arrNotif.push(n5);
    console.log(arrNotif);
    Notificatios.renderNotificatios(arrNotif);
})