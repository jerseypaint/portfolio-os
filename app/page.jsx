import Link from 'next/link'
import { client } from '@/utils/sanity/client'
import { ArrowUpRight } from './components/Icons'

function DesktopIcon ({path, title}) {
  return(
      <Link className={`flex items-center justify-between gap-4 px-4 py-1 text-sky-400 uppercase border border-sky-400 rounded hover:text-white hover:border-white !no-underline`} href={path}>{title}
        <i className={`block w-4`}><ArrowUpRight /></i>
      </Link>
  )
}

export default async function Home() {
  //const { signal } = new AbortController()
  const pages     = await client.fetch(`*[_type == "page"]{_id, slug, title}`)
  const projects  = await client.fetch(`*[_type == "project"]{_id, slug, title}`)

  return (
   
    <main className="py-10">
      <div className={`container`}>
        <div className={`max-w-2xl mb-10`}>
          <h1 className={`text-h1 inline`}>Weclome, </h1><p className={`text-p inline`}>to my personal website. Click around and enjoy.</p>
          
        </div>
        <h2 className={`text-h2 mb-2`}>Pages</h2>
        {pages &&
          <ul className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-4`}>
            {pages.map(page => {
              return(
                <li>
                  <DesktopIcon path={page.slug.current} title={page.title} />
                </li>
              )
            })}
          </ul>
        }
        <h2 className={`text-h2 mb-2 mt-10`}>Projects</h2>
        {projects &&
          <ul className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-4`}>
            {projects.map(project => {
              return(
                <li>
                    <DesktopIcon path={`/portfolio/${project.slug.current}`} title={project.title} />
                </li>
              )
            })}
          </ul>
        }
      </div>
    </main>
  )
}
