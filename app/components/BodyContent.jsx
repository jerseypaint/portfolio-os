import { PortableText } from '@portabletext/react'
import imageUrlBuilder from '@sanity/image-url'
import { getImageDimensions } from '@sanity/asset-utils'
import { client } from '@/utils/sanity/client'

const SampleImageComponent = ({value, isInline}) => {
    const { width, height } = getImageDimensions(value)
    return (
      <img
        src={imageUrlBuilder(client)
          .image(value)
          .width(isInline ? 100 : 1920)
          .fit('max')
          .auto('format')
          .url()
        }
        alt={value.alt || ' '}
        loading="lazy"
        style={{
        display: isInline ? 'inline-block' : 'block',
        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
        }}
      />
    )
  }

const portableTextComponents = {
    types: {
      image: SampleImageComponent
    },
    block: {
        h1: ({children}) => <h1>{children}</h1>,
        h2: ({children}) => <h2>{children}</h2>,
        h3: ({children}) => <h3>{children}</h3>,
        h4: ({children}) => <h4>{children}</h4>,
        blockquote: ({children}) => <blockquote className="border-l-purple-500">{children}</blockquote>,
    },
  
    marks: {
      link: ({children, value}) => {
        const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
        return (
          <a href={value.href} rel={rel} target={`_blank`}>
            {children}
          </a>
        )
      },
    },
  }
  
  export const BodyContent = ({data}) => {
    return (
      <article className={`prose dark:prose-invert`}>
        <PortableText value={data} components={portableTextComponents} />
      </article>
    )
  }