import { Toaster as RHT, toast } from "sonner";

interface Props {
  title: string;
  loading: string;
  success: string;
  error: string;
}

const FakePromise = ({ loading, success, error }: Props) => {
  toast.promise(
    new Promise((resolve, reject) => {
      setTimeout(
        Boolean(Math.round(Math.random())) ? resolve : reject,
        (Math.random() * (5 - 1) + 1) * 1000
      );
    }),
    {
      loading,
      success,
      error,
    }
  );
};

export const Toaster = () => {
  return (
    <RHT
      position="bottom-left"
      theme="dark"
      pauseWhenPageIsHidden
      toastOptions={{
        style: {
          borderColor: "rgb(var(--accent))",
          backgroundColor: "rgb(var(--bg-dark))",
        },
      }}
    />
  );
};

export const ButtonPromise = (props: Props) => {
  return (
    <button type="button" onClick={() => FakePromise(props)}>
      {props.title}
    </button>
  );
};
