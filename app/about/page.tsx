import type {Metadata} from 'next'
import InfoPage from '@/components/InfoPage'
export const metadata:Metadata={title:'About'}
export default function Page(){return <InfoPage kind="about"/>}
