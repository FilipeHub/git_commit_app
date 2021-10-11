import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Container, AvatarPicture, CommitText, Header, CodeBlock } from './styles'; 
import api from '../../services/api';

const Commit = () => {
    const { owner, repository, commitSHA }  = useParams();
    const [commits, setCommits] = useState();
    const [commitsDiff, setCommitsDiff] = useState();
    const [avatarUrl, setAvatarUrl] = useState();

    useEffect(() => {
        loadCommits();
        
        async function loadCommits() {
            const commits = await api.get(`/repositories/${owner}/${repository}/commit/${commitSHA}`);
            const commitsDiff = await api.get(`/repositories/${owner}/${repository}/commit/${commitSHA}/diff`);
            
            console.log('commits', commits.data);
            console.log('commits Diff', commitsDiff.data);

            const authorSignature = await api.get(`/signature/${commits.data[0].author}`)
            setAvatarUrl(authorSignature.data.avatarUrl);

            setCommits(commits.data);
            setCommitsDiff(commitsDiff.data);
        }
    }, [owner, repository, commitSHA]);

    
    return (
        <Container>
            <Header>
                <AvatarPicture src={avatarUrl} alt='Profile picture of the user'/>
                <CommitText>{avatarUrl}</CommitText>
                <h1>Data</h1>
            </Header>

            <CodeBlock> 
            <ul>
                {commitsDiff?.map(commit => (
                    <li key={commit.baseFile}>
                        <div>{commit.baseFile}</div>
                        <textarea>{commit.content}</textarea>
                    </li>
                ))}
            </ul>

            </CodeBlock>
            


        </Container>
    );
    
};

export default Commit;