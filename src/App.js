import { useForm } from "react-hook-form";
import axios from "axios";

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) =>
    axios.post(
      "https://sheet.best/api/sheets/20564353-7caa-4910-ae1e-c3467ffe6e92",
      data
    );

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("name")} />

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("hp", { required: true })} />

      <input type="submit" />
    </form>
  );
}
