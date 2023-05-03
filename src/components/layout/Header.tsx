import emoji from '../../../public/emoji-tears-of-joy.svg'

import {
    AppBar,
    AppBarSection,
    AppBarSpacer,
    Avatar,
  } from "@progress/kendo-react-layout"
  
import Image from "next/image"
import Link from 'next/link'

export default function Header() {
    return (
        <AppBar /*id='app-bar-header'*/>
            <AppBarSection>
            <button className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base">
                <span className="k-icon k-i-menu" />
            </button>
            </AppBarSection>

            <AppBarSpacer style={{ width: 4 }} />

            <AppBarSection>
                <h1 className="tw-text-xl">KendoReact</h1>
            </AppBarSection>

            <AppBarSpacer style={{ width: 32 }} />

            <AppBarSection>
            <ul className='tw-flex'>
                <li className='tw-p-2'>
                <Link href="/">
                    Home
                </Link>
                </li>
                <li className='tw-p-2'>
                <Link href="/users">
                    Users
                </Link>
                </li>
                <li className='tw-p-2'>
                <Link href="/addresses">
                    Addresses
                </Link>
                </li>
            </ul>
            </AppBarSection>

            <AppBarSpacer />

            <AppBarSection>
            <span className="k-appbar-separator" />
            </AppBarSection>

            <AppBarSection>
            <Avatar type="image" style={{ position: "relative" }} fillMode={null}>
                <Image 
                    src={emoji}
                    alt="Emoji Tears of Joy" 
                    fill
                    style={{ objectFit: "contain" }}
                />
            </Avatar>
            </AppBarSection>
        </AppBar>
    )
}