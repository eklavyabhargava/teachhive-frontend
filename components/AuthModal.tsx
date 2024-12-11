import { setAuthModal } from "@/store/slices/userSlice";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { FcGoogle } from "react-icons/fc";

interface Login {
  emailId: string;
  password: string;
}

interface Signup {
  name: string;
  emailId: string;
  password: string;
  role: string;
  profileImage: File | undefined;
  bio: string;
}

type SignUpForm = keyof Signup;
type LoginForm = keyof Login;

interface Form {
  label: string;
  name: SignUpForm | LoginForm;
  type: string;
  required: boolean;
  options?: string[];
  hide?: boolean;
}

const AuthModal = () => {
  const [showSignupForm, setSignupForm] = useState<boolean>(false);
  const [loginData, setLoginData] = useState<Login>({
    emailId: "",
    password: "",
  });
  const [signupData, setSignupData] = useState<Signup>({
    name: "",
    emailId: "",
    password: "",
    role: "student",
    profileImage: undefined,
    bio: "",
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const dispatch = useDispatch();

  const Forms: Form[] = [
    {
      label: "Full Name",
      name: "name",
      type: "text",
      required: true,
      hide: !showSignupForm,
    },
    {
      label: "Email ID",
      name: "emailId",
      type: "email",
      required: true,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      required: true,
    },
    {
      label: "Select Role",
      name: "role",
      type: "select",
      options: ["Student", "Tutor", "Institution"],
      required: true,
      hide: !showSignupForm,
    },
    {
      label: "Profile Image",
      name: "profileImage",
      type: "file",
      required: false,
      hide: !showSignupForm,
    },
    {
      label: "Bio",
      name: "bio",
      type: "textarea",
      required: false,
      hide: !showSignupForm,
    },
  ];

  const handleOnChange = ({ name, value }: { name: string; value: string }) => {
    if (showSignupForm) {
      setSignupData((curr) => {
        return { ...curr, [name]: value };
      });
    } else {
      setLoginData((curr) => {
        return { ...curr, [name]: value };
      });
    }
  };

  return (
    <div>
      <div className="font-medium text-2xl text-center py-2 border-b-1 flex flex-row justify-between px-2">
        <div></div>
        <p className="my-auto">{showSignupForm ? "Sign Up" : "Login"}</p>
        <button onClick={() => dispatch(setAuthModal(false))}>
          <IoMdClose />
        </button>
      </div>

      <div>
        <Form className="flex flex-col gap-y-3 my-3 tablet:w-[50%] w-[90%] mx-auto">
          {Forms.map((form) => {
            if (form.hide) return;
            if (form.type === "file") return;

            if (form.type === "select")
              return (
                <Form.Select
                  key={form.name}
                  name={form.name}
                  value={
                    showSignupForm
                      ? (signupData[form.name] as string | number | undefined)
                      : loginData[form.name as keyof Login]
                  }
                  onChange={({ target }) => handleOnChange(target)}
                  isInvalid={!!errors[form.name]}
                >
                  <option hidden value="">
                    Select an option
                  </option>
                  {form.options?.length &&
                    form.options.map((option) => (
                      <option key={option} value={option.toLowerCase()}>
                        {option}
                      </option>
                    ))}
                </Form.Select>
              );

            if (form.type === "textarea")
              return (
                <Form.Control
                  key={form.name}
                  as="textarea"
                  type="textarea"
                  name={form.name}
                  value={
                    showSignupForm
                      ? (signupData[form.name] as string | number | undefined)
                      : loginData[form.name as keyof Login]
                  }
                  onChange={({ target }) => handleOnChange(target)}
                  placeholder={form.label}
                  isInvalid={!!errors[form.name]}
                />
              );

            return (
              <Form.Control
                key={form.name}
                type={form.type}
                className="px-3 py-2 rounded-xl border"
                placeholder={`${form.label} ${form.required ? "*" : ""}`}
                name={form.name}
                onChange={({ target }) => handleOnChange(target)}
                value={
                  showSignupForm
                    ? (signupData[form.name] as string | number | undefined)
                    : loginData[form.name as keyof Login]
                }
                isInvalid={!!errors[form.name]}
              />
            );
          })}
          <Button variant="secondary" style={{ borderRadius: "18px" }}>
            {showSignupForm ? "Sign Up" : "Log In"}
          </Button>
        </Form>
        <div className="text-sm text-center font-semibold">
          {showSignupForm ? (
            <p>
              Already a registered user?{" "}
              <button
                className="text-prime"
                onClick={() => setSignupForm(false)}
              >
                Log In
              </button>
            </p>
          ) : (
            <p>
              Not a registered user?{" "}
              <button
                className="text-prime"
                onClick={() => setSignupForm(true)}
              >
                Sign Up
              </button>
            </p>
          )}
        </div>
        <div className="flex items-center my-2">
          <hr className="h-px bg-bgSecondary grow border-none m-0" />
          <span className="px-2 text-bgSecondary text-sm">OR</span>
          <hr className="h-px grow bg-bgSecondary border-none m-0" />
        </div>
        <div className="flex flex-col gap-y-2 tablet:w-[60%] w-[90%] mx-auto my-3">
          <button className="flex flex-row justify-between items-center rounded-full w-full bg-bgSecondary text-black px-2 py-2">
            <div className="text-2xl">
              <FcGoogle />
            </div>
            <p className="text-sm my-auto">Continue With Google</p>
            <p></p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
