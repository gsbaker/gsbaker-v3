import React from 'react';

const Description = props => {
    return (
        <div className={'mt-4 pt-4 pb-4'}>
            <div className={'container'}>
                {/*<h2 className={'font-monospace'}> &lt;hello world/&gt; </h2>*/}
                <p className={'user-select-all'}>
                    Hi, I'm George! I'm a <b>computer science graduate</b> and a <b>full-stack software engineer</b>.
                    I've spent the last three years at one of the UK's top universities, studying a broad range of subjects
                    from <i>data structures</i> to <i>functional programming</i>. I'm also a <b>photographer</b> with a
                    passion for portraits and people. When I'm not coding or snapping photos, I enjoy playing tennis,
                    reading, and listening to music.
                </p>
            </div>
        </div>
    );
};

export default Description;
