export interface ServiceItem {
  name: string
  description: string
  price: number
}

export interface ServiceSection {
  id: number
  title: string
  image: string
  items: ServiceItem[]
}