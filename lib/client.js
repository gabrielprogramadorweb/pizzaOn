import sanityClient from "@sanity/client"
import ImageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: "gk8vm7ky",
    dataset: "production",
    apiVersion: "2023-01-06",
    useCdn: true,
    token: "skBRnNifJp7iDg4IBXdsTg1CpzC01xMUrtdHwCtJg4zzdWGMTXoNLcYdNupFl4nh0TQDXu9vdnhb8y1mJMMVpsBQbSku28NlE63OXzHMOXV9fQU0rHfc2nIhiYyNx8E0CIgdLWfXVLythzE8xiNr9fSUwBkSpwGI2sAvYsukw2FFJOsC1mF0"
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)