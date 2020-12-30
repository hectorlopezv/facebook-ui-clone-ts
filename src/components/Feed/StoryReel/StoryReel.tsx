import React from 'react';
import './StoryReel.css';
import Story from './Story';
export interface StoryReelProps {
    
}
 
const StoryReel: React.FC<StoryReelProps> = () => {
    return (
        <div className="storyReel">
           <Story
                image='https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/119733779/original/cc2e5944473be8570911a5f558f0d28a150e3cdc/paint-you-a-custom-abstract-portrait-drawing-illustration.png'
                profileSrc="https://avatars2.githubusercontent.com/u/46845790?s=460&u=74f9d06a8654751455170eb721ffd54de0fec990&v=4"
                title='Hector Lopez'
            />
            <Story
                image='https://assets.yellowtrace.com.au/wp-content/uploads/2019/07/25141848/Abstract-Portrait-Paintings-by-Joseph-Lee-Yellowtrace-05.jpg'
                profileSrc="https://avatars2.githubusercontent.com/u/46845790?s=460&u=74f9d06a8654751455170eb721ffd54de0fec990&v=4"
                title='Rafeh Qazi'
            />
            <Story
                image='https://cdn.shopify.com/s/files/1/0128/3672/products/DIMENSIONAL_ABSTRACT_PORTRAIT_no._IV_1024x1024.png?v=1507719723'
                profileSrc="https://avatars2.githubusercontent.com/u/46845790?s=460&u=74f9d06a8654751455170eb721ffd54de0fec990&v=4"
                title='Sony Sangha'
            />

            <Story
                image='https://cdn.shopify.com/s/files/1/0128/3672/products/DIMENSIONAL_ABSTRACT_PORTRAIT_no._IV_1024x1024.png?v=1507719723'
                profileSrc="https://avatars2.githubusercontent.com/u/46845790?s=460&u=74f9d06a8654751455170eb721ffd54de0fec990&v=4"
                title='Alberto Perez'
            />
            <Story
                image='https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/119733779/original/cc2e5944473be8570911a5f558f0d28a150e3cdc/paint-you-a-custom-abstract-portrait-drawing-illustration.png'
                profileSrc="https://avatars2.githubusercontent.com/u/46845790?s=460&u=74f9d06a8654751455170eb721ffd54de0fec990&v=4"
                title='Hector Lopez'
            />

        </div>

      );
}
 
export default StoryReel;