import type {Metadata} from 'next'
import InfoPage from '@/components/InfoPage'
export const metadata:Metadata={title:'Disclaimer'}
export default function Page(){return <InfoPage kind="disclaimer"/>}
