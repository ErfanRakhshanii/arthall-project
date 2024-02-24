import { useState } from "react";
import styles from "../../Styles/AddToDo/AddToDo.module.css";
import useTodoStore from "../../zustand/Store";

export default function AddToDo() {
  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const { todoArray, setTodoArray } = useTodoStore();
  console.log(todoArray)

  const categories = ["پیش فرض"];

  const HandleAddToDo = () => {
    let newToDo = {
      id: Math.random(),
      title: title,
      shortDescription: shortDescription,
      date: date,
      category: category,
      description: description,
    };
    let copyOfTodoes = [...todoArray];
    copyOfTodoes.push(newToDo);
    setTodoArray(copyOfTodoes);
  };
  return (
    <main className={styles.container}>
      <div className={styles.title}>افزودن</div>
      <div className={styles.formBox} dir="ltr">
        <span>Personal</span>
        <div className={styles.inputBox}>
          <div className={styles.inputContainer0} dir="rtl">
            <input
              type="text"
              placeholder="توضیح کوتاه"
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
            />
          </div>
          <div className={styles.inputContainer1} dir="rtl">
            <input
              type="text"
              placeholder="تسک"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="title">عنوان</label>
          </div>
          <div className={styles.inputContainer2} dir="rtl">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
            <label htmlFor="category">دسته بندی</label>
          </div>
          <div className={styles.inputContainer3} dir="rtl">
            <input
              type="date"
              id="datePicker"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <textarea
            placeholder="توضیح"
            dir="rtl"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button onClick={HandleAddToDo}>ذخیره</button>
      </div>
    </main>
  );
}
