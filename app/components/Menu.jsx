import Link from "next/link"
import Image from "next/image"

export const Menu = ({items}) => {
    
    return(
       <ul>
            {items && items.map(item => {
                return(
                    <li>
                        <Link to={item.path}>
                            <span className={`block w-7`}>
                                <Image src={``} alt={``} />
                            </span>
                            <p className={`text-center`}>{item.title}</p>
                        </Link>
                    </li>
                )
            })}
       </ul>
    )
}