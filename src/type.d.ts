//REGISTER USER
interface FormData {
  fullName: string;
  message: string;
  code: string;
}

//ProfileCoustomerProps
interface ProfileCoustomerProps {
  username: string;
  image: string;
  hidden?: { size?: string; display: string };
  display?: { size?: string; display: string };
}

//PROPSSELECT ---LINK---BUTTON---INPUT---
interface SelectButton {
  type?: string;
  content?: string;
  href?: string;
  style?: string;
}

interface Customer {
  id: number;
  username: string;
  image: string;
}
interface CustomerData {
  data: Customer[];
  message: string;
}
