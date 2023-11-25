import { Fragment, useCallback, useEffect, useState } from "react";
import NavigationBar from "../NavBar/NavigationBar";
import styles from "./Home.module.css";

import axios from "axios";
import NewStoreForm from "./NewStoreForm";
import StoreItem from "./StoreItem";

const Home = () => {
  const [itemList, setItem] = useState([]);

  const fetchItems = useCallback(() => {
    console.log("fetch all items");
    axios("http://localhost:3030/home/getItems")
      .then((res) => {
        // console.log(res);
        setItem(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return (
    <Fragment>
      <div>
        <NavigationBar />
        <div className={styles["main-div"]}>
          <h1 className="py-4 px-2">Welcome to General Store</h1>
        </div>

        <NewStoreForm fetchItems={fetchItems} />

        <div align="center" className={`pb-5 ${styles.expenseDiv}`}>
          {itemList.length > 0 && (
            <ul className="p-0">
              {itemList.map((item) => (
                <StoreItem
                  key={item.id}
                  id={item.id}
                  item={item.item}
                  description={item.description}
                  price={item.price}
                  quantity={item.quantity}
                  fetchItems={fetchItems}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
