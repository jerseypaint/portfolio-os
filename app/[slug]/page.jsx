import { Window } from "../components/Window"
import { client } from '../../utils/sanity/client'
import { BodyContent } from "@/app/components/BodyContent"

export default async function Page({params}) {
    const { slug } = params
    const data = await client.fetch(`*[_type == "page" && slug.current == $slug][0]`, { slug: slug })
    return(
        <Window title={data?.title} path={slug}>
            <div className={`container prose dark:prose-invert`}>
              {data?.body && 
                <div className={``}>
                  <BodyContent data={data.body} />
                </div>
              }
            </div>
        </Window>
    )
}

export async function generateStaticParams() {
    const pages = await client.fetch(`*[_type == "page"]{ slug }`)
   
    return pages.map((page) => ({
      slug: page.slug.current
    }))
  }