import React from 'react';
import Delete from '../Delete/Delete';
import Edit from '../Edit/Edit';
import Add from '../Add/Add';
import Update from '../Update/Update';
import TabContent from '../TabContent/TabContent';
import Tabs from '../Tabs/Tabs';
import {useState} from 'react';
import styles from './App.module.css';

const App = () => {
  const state = {
    tabs:[
      { 
        id: 'tab1',
        title: 'Все сотрудники'
      },
      { 
        id: 'tab2',
        title: 'Последние добавленные' 
      },
      { 
        id: 'tab3',
        title: 'IT-отдел' 
      }
    ],
    fields:[
      {
        name:'Имя',
        position:'Должность',         
        departmentName:'Подразделение',        
        addedDate:'Дата добавления',
        birthDate:'Дата рождения',
        email:'Эл. почта',
        phone:'Телефон',
        country:'Страна'
      }
    ],
    items: [
      {
        id: 1,
        name:'Иван Иванов',
        position:'Главный бухгалтер',         
        departmentName:'Бухгалтерия', 
        departmentId:3,
        addedDate:'2001-03-14',
        birthDate:'1976-08-27',
        email:'ivan@mail.com',
        phone:'+7789965',
        country:'Россия'
      },
      {
        id: 2,
        name:'Дарья Петрова',
        position:'Системный администратор',         
        departmentName:'IT-отдел', 
        departmentId: 1,
        addedDate:'2021-04-27',
        birthDate:'1985-12-12',
        email:'daria@mail.com',
        phone:'+7415167',
        country:'Россия'
      },
      {
        id: 3,
        name:'Аревик Месропян',
        position:'Программист',         
        departmentName:'IT-отдел', 
        departmentId:1,
        addedDate:'2015-09-23',
        birthDate:'1990-11-20',
        email:'arevik@mail.com',
        phone:'+374585695',
        country:'Армения'
      },
      {
        id: 4,
        name:'Биргит Клеин',
        position:'Табельщик',         
        departmentName:'Отдел кадров', 
        departmentId:2,
        addedDate:'2011-10-05',
        birthDate:'1994-10-09',
        email:'birgit@mail.com',
        phone:'+49756883',
        country:'Германия'
      },
      {
        id: 5,
        name:'Марио Барбиери',
        position:'Веб-дизайнер',         
        departmentName:'IT-отдел', 
        departmentId:1,
        addedDate:'2020-11-11',
        birthDate:'1983-05-23',
        email:'mario@mail.com',
        phone:'+3937357',
        country:' Италия'
      },
      {
        id: 6,
        name:'Меиз Ахметов',
        position:'Инспектор по кадрам',         
        departmentName:'Отдел кадров', 
        departmentId:2,
        addedDate:'2020-09-03',
        birthDate:'1996-06-04',
        email:'meiz@mail.com',
        phone:'+7262472',
        country:'Казахстан'
      },
      {
        id: 7,
        name:'Эва Новак',
        position:'Бухгалтер',         
        departmentName:'Бухгалтерия', 
        departmentId:3,
        addedDate:'2021-01-13',
        birthDate:'1969-04-15',
        email:'eva@mail.com',
        phone:'+42032722',
        country:'Чешская республика'
      }
    ]
  }

  const [active, setActive] = useState(true);
  const [sectionId, setSectionId] = useState('tab1');
  const [items, setItems] = useState(state.items);
  const [count, setCount] = useState(7);
  const [rowId, setRowId] = useState(0);
  const [disable, setDisable] = useState(true);
  const [rowActive, setRowActive] = useState(false);  
  const [rowData, setRowData] =  useState({});  
  const [inputs, setInputs] = useState({});

  const onClickAdd = data => {
    let depName = data.departmentName ? data.departmentName : "IT-отдел";
    let depId = depName === "IT-отдел" ? 1 :
                depName === "Отдел кадров" ? 2 : 3;
    const newEmployee = [
        ...items,
        {
          id: count + 1,
          name: data.name,
          position: data.position,         
          departmentName: depName, 
          departmentId: depId,
          addedDate: data.addedDate,
          birthDate: data.birthDate,
          email: data.email,
          phone: data.phone,
          country: data.country
        }
    ];  
    setItems(newEmployee);
    setCount(count + 1);  
  };

  const onClickRow = id => { 
      const row = items.find(item => item.id === id);
      setRowData(row);
      setRowId(id);
      setRowActive(!rowActive);      
      setDisable(!disable);
  };

  const onClickDelete = () => {
      let newItemList = items.filter(item => item.id !== rowId);
      setItems(newItemList);     
      setCount(count - 1);
      setDisable(true);
      setRowActive(false); 
  };

  const onClickOpenEdit = () =>{
    setInputs(
      {
        name: rowData.name,
        position: rowData.position,         
        departmentName: rowData.departmentName,           
        addedDate: rowData.addedDate,
        birthDate: rowData.birthDate,
        email: rowData.email,
        phone: rowData.phone,
        country: rowData.country
      }
    );
  }

  const onClickEdit = data => {
    let depName = data.departmentName ? data.departmentName : "IT-отдел";
    let depId = depName === "IT-отдел" ? 1 :
                depName === "Отдел кадров" ? 2 : 3;
    let newItemList = items.filter(item => item.id !== rowId);
    setItems(newItemList);
    const newEmployee = [
      {
        id: rowId,
        name: data.name,
        position: data.position,         
        departmentName: depName, 
        departmentId: depId,
        addedDate: data.addedDate,
        birthDate: data.birthDate,
        email: data.email,
        phone: data.phone,
        country: data.country
      },
      ...newItemList
    ];  
    setItems(newEmployee);

    setDisable(true);
    setRowActive(false); 
  };

  return(
    <div className={styles.wrap}>
      <div className={styles.controlPanel}>
        <Delete onClickDelete={onClickDelete}
                disable={disable}/>
        <Edit onClickOpenEdit={onClickOpenEdit}
              rowData={rowData}
              onClickEdit={onClickEdit}            
              disable={disable}
              inputs={inputs}
              setInputs={setInputs}/>
        <Add onClickAdd={onClickAdd}/>
        <Update />
      </div>
      <Tabs tabs={state.tabs}             
            setActive={setActive}
            sectionId={sectionId} 
            setSectionId={setSectionId}/>
      <TabContent tabs={state.tabs} 
                  fields={state.fields}
                  items={items}
                  active={active}
                  onClickRow={onClickRow}
                  rowActive={rowActive}
                  rowId={rowId}/>
    </div>
  );
};

export default App;
