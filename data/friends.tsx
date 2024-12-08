export const Friends: Friend[] = [
    {
        title: 'Red Contritio',
        cname: "可可",
        description: '西工大的莱可可',
        website: 'https://redcontritio.github.io/',
        avatar: 'https://redcontritio.github.io/images/avatar.jpg',
        tips: "怎么会被淘宝卖盗版的骗了哈哈哈哈"
    },
    {
        title: 'Time Degree',
        cname: '时度度',
        description: "warma 痴一只",
        website: 'https://blog.timedegree.cc/',
        avatar: 'https://blog.timedegree.cc/images/warma.gif',
        tips: "贡献了主站(cc.timedegree.cc)的域名(小声)"
    },
]

export type Friend = {
    title: string
    cname?: string
    description: string
    website: string
    avatar?: string
    tips?: string
}