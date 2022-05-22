import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase/config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, onSnapshot, query } from "firebase/firestore";
import ProductItem from "../components/ProductItem";
const Login = () => {
  const [products, setProduct] = useState([]);
  const [values, setValues] = useState({ used: "", password: "" });
  const [query, setQuery] = useState("products");

  const hanldeSetValues = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const hanldeRegister = async (e) => {
    e.preventDefault();
    try {
      const used = await createUserWithEmailAndPassword(
        auth,
        values.used,
        values.password
      );
      const usedRef = collection(db, "used");
      await addDoc(usedRef, {
        id: used.user.uid,
        email: values.used,
        password: values.password,
      });
      //   const used = await signInWithEmailAndPassword(
      //     auth,
      //     values.used,
      //     values.password
      //   );
      console.log("successfully");
      console.log(used);
    } catch (err) {
      console.log(err);
    }
  };
  const hanldeSignOut = () => {
    try {
      signOut(auth);
      console.log("success");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const proRef = collection(db, query);
    onSnapshot(proRef, (snapshop) => {
      let pro = [];
      snapshop.docs.forEach((doc) => {
        pro.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setProduct(pro);
    });
  }, [query]);
  //   console.log(query);
  //   console.log(products);
  return (
    <>
      <div className="w-full max-w-[500px] mx-auto mt-[200px] text-base font-medium border border-[#ccc]">
        <h2 className="text-xl text-center font-bold my-5">Login</h2>
        <form onSubmit={hanldeRegister} className="px-10 py-5 ">
          <div className="form-group my-5">
            <input
              type="text"
              name="used"
              onChange={hanldeSetValues}
              placeholder="enter you user name"
              className="w-full py-2 outline-none border border-[#bbb] px-2"
            />
          </div>
          <div className="form-group my-5">
            <input
              name="password"
              onChange={hanldeSetValues}
              type="password"
              placeholder="enter you user password"
              className="w-full py-2 outline-none border border-[#bbb] px-2"
            />
          </div>
          <button>Register</button>
        </form>
        <button onClick={hanldeSignOut}>SignOut</button>
      </div>
      <div className="w-full max-w-[1200px] mx-auto grid grid-cols-4 gap-x-5 mt-10">
        {/* {products.length > 0 &&
          products.map((pro) => (
            <div key={pro.id}>
              <ProductItem item={pro} />
            </div>
          ))} */}
        {/* <button onClick={() => setQuery("used")}>toggle</button> */}
      </div>
    </>
  );
};

export default Login;
