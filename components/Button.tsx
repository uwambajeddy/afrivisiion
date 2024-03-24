import Image from "next/image";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  url?: string;
  variant: string;
  full?: boolean;
}

const Button = ({ type, title, icon, variant, full,url }: ButtonProps) => {
  return (
    <a href={url}
    className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </a>
  )
}

export default Button