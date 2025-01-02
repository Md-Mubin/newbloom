import React from 'react'
import './LearnBlog.css'
import CommonLearnBlogCard from '@/app/Commons/CommonLearnBlogCard'

const LearnBlog = () => {
    return (
        <>
            <section className='learnBlogSection'>
                <div className="container">
                    <ul className='learnBlogHead'>
                        <h1>Learn From Our Blog</h1>
                        <p>we understand that building a family is one of life's most precious journeys.</p>
                    </ul>
                    <ul className='learnBlogCardRow'>
                        <CommonLearnBlogCard
                            commonLearnBlogImg={"/learnBlogImg1.png"}
                            commonLearnBlogHead={"Breaking Myths About Surrogacy in Georgia: What You Need to Know"}
                            commonLearnBlogInfo={"Surrogacy is a transformative way to grow your family, yet it's often surrounded by myths and misconceptions."}
                        />
                        <CommonLearnBlogCard
                            commonLearnBlogImg={"learnBlogImg2.png"}
                            commonLearnBlogHead={"The Emotional Journey of Surrogacy: What to Expect"}
                            commonLearnBlogInfo={"Every surrogacy journey begins with a story. Maybe it’s one of longing, of countless nights dreaming of a child, or perhaps"}
                        />
                        <CommonLearnBlogCard
                            commonLearnBlogImg={"learnBlogImg3.png"}
                            commonLearnBlogHead={"Surrogacy Means Losing Control Over the Process"}
                            commonLearnBlogInfo={"Some intended parents worry about losing control during surrogacy. Collaboration and transparency are key to maintaining control during surrogacy."}
                        />
                    </ul>
                </div>
            </section>
        </>
    )
}

export default LearnBlog