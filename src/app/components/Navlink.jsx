import Link from "next/link";

const Navlink = ({href, title}) => {
    return (
        <Link scroll={true} href={href} className="block py-2 pl-2 pr-2">
            {title}
        </Link>
    )
}

export default Navlink;