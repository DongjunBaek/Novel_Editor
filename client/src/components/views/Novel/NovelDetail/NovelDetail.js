import React from 'react';
import '../NovelDetail/NovelDetail.css';
import NovelMenu from '../NovelDetail/Sections/NovelMenu';

function NovelDetail() {
    return (
        <section className="NovelDetail-container">
            <NovelMenu />
            <article className="Novel-article test">
                novelarticle
            </article>
        </section>
    )
}

export default NovelDetail
