import "./PersonalOffice.css"

import {useState} from "react";

export default function PersonalOfficeAdmin () {

    let [start_data, setStart_data] = useState('');
    let [end_data, setEnd_data] = useState('');

    const addStartData = (e) => {
        let start_data = e.target.value;
        setStart_data(start_data || '');
    }
    const addEndData = (e) => {
        let end_data = e.target.value;
        setEnd_data(end_data || '');
    }

    return (
        <div className={'personal_office'}>
            <p>Особистий Кабінет Admin</p>
            <div className={'main'}>
                <div className={'my_nav'}>
                    <button>Редагувати профіль</button>
                    <br/>
                    <button>Додати заклад</button>
                    <form>
                        <select></select>
                        <br/>
                        <button>Редагувати користувача</button>
                        <button>Видалити користувача</button>
                    </form>
                    <form>
                        <select></select>
                        <br/>
                        <button>Редагувати заклад</button>
                        <button>Видалити заклад</button>
                    </form>
                    <p>Фільтрація по даті</p>
                    <input type="date" name={'start_data'} value={start_data} onInput={addStartData}/>
                    <input type="date" name={'end_data'} value={end_data} onInput={addEndData}/>
                    <button>Радагувати загальні новини</button>
                </div>
                <div className={'info_restoration'}>
                    <div className={'navigation_restoration'}>
                        <button>Всі заклади</button>
                        <button>Мої заклади</button>
                        <button>Улюблені заклади</button>
                        <button>Заклади з моїми оцінками</button>
                        <button>Заклади з моїми коментарями</button>
                        <button>Заклади що очікують на модерацію</button>
                    </div>
                    main
                </div>
            </div>
        </div>
    );
}
