import { Window } from "../../components/Window"
import { client } from '../../../utils/sanity/client'
import { BodyContent } from "@/app/components/BodyContent"
import { Checkmark } from "@/app/components/Icons"

export default async function Project({ params }) {
    const { slug } = params
    const data = await client.fetch(`*[_type == "project" && slug.current == $slug][0]`, { slug: slug })
    console.log(data)
    return(
        <Window title={data?.title} path={`/portfolio/${slug}`}>
            <div className={`container`}>
                {data?.title &&
                    <h1 className={`text-h1 text-sky-400 mb-2`}>{data.title}</h1>
                }
                {data?.overview &&
                    <div>
                        <p className={`text-p`}>{data.overview}</p>
                    </div>
                }
                {data?.technologies &&
                    <div className={`my-8`}>
                        <h2 className={`text-h2 text-sky-400 mb-4`}>Technologies</h2>
                        <ul className={`grid grid-cols-1 md:grid-cols-2 gap-4 xl:max-w-[50%]`}>
                            {data.technologies && data.technologies.map((tech) => {
                                return (
                                    <li className={`uppercase font-semibold flex items-center justify-center relative px-4 py-1 bg-sky-400 text-gray-900 rounded`}>
                                        <i className={`absolute left-4 w-5 h-full flex flex-col justify-center`}>
                                            <Checkmark />
                                        </i>
                                        {tech}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                }
                {data?.body && 

                    <div>
                        <h2 className={`text-h2 border-b border-sky-400 mb-8 text-sky-400`}>Screenshots</h2>
                        <div>
                            <BodyContent data={data.body} />
                        </div>
                    </div>   
                }
            </div>
        </Window>
    )
}

export async function generateStaticParams() {
    const projects = await client.fetch(`*[_type == "project"]{ slug }`)

    return projects.map((project) => ({
        slug: project.slug.current
    }))
}