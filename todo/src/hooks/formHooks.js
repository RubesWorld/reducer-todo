import { useState } from "react";

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChanges = (e) => {
    setValues({
      ...values,
      task: e.target.value,
      id: Date.now(),
      completed: false,
    });
  };

  return [values, handleChanges];
};

export default useForm;
