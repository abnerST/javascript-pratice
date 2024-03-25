function main() {

    const form = document.querySelector('.form');
    const buttons = form.querySelectorAll('.button');
    const h1 = document.querySelector('.container H1');

    buttons.forEach(button => {

        button.addEventListener('click',
            (evento) => {

                evento.preventDefault();

                const buttonType = button.getAttribute("data-button");


                if (buttonType === "newDate") {
                    setDateUsingNewDate();
                } else {
                    setDateUsingSwitchCase();
                }


            }
        );

    }

    );


    function setDateUsingNewDate() {
        console.log("new Date()");
        const date = new Date();
        const dateConfig = {
            dateStyle: 'full'
        };

        h1.innerText = date.toLocaleDateString('pr-BR', dateConfig);

    }



    function setDateUsingSwitchCase() {
        console.log("Switch case");
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        const dayWeek = date.getDay();


        h1.innerText = `${getDayWeekName(dayWeek)}, ${day} de ${getMonthName(month)} de ${year}`;


    }


    function getDayWeekName(dayWeek) {

        switch (dayWeek) {
            case 0:
                return "Domingo";
            case 1:
                return "Segunda";
            case 2:
                return "Terça";
            case 3:
                return "Quarta";
            case 4:
                return "Quinta";
            case 5:
                return "Sexta";
            case 6:
                return "Sábado";

        }



    }

    function getMonthName(month) {

        switch (month) {
            case 0:
                return "Janeiro";
            case 1:
                return "Fevereiro";
            case 2:
                return "Março";
            case 3:
                return "Abril";
            case 4:
                return "Maio";
            case 5:
                return "Junho";
            case 6:
                return "Julho";
            case 7:
                return "Agosto";
            case 8:
                return "Setembro";
            case 9:
                return "Outubro";
            case 10:
                return "Novembro";
            case 11:
                return "Dezembro";
        }

    }


}
main();