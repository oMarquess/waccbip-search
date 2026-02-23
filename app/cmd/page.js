'use client';
import { EvervaultProvider, EvervaultInput } from '@evervault/react';
import { useState } from 'react';

import Button from '@/components/Button/Button';
import Console from './components/Console/Console';
import Header from '@/components/Header/Header';
import Input from '@/components/Input/Input';
import { inputsConfig } from './config';
import { sourceUrls } from '../config';
import styles from './page.module.css';

export default function Inputs() {
  const [fullName, setFullName] = useState('Claude Shannon');
  const [inputsData, setInputsData] = useState({});
  const [logStream, setLogStream] = useState([]);

  function handleOnChange(data) {
    const log = {
      type: data.encryptedCard.type,
      number: data.encryptedCard.number,
      expMonth: data.encryptedCard.expMonth,
      expYear: data.encryptedCard.expYear,
      cvc: data.encryptedCard.cvc,
    };
    setInputsData(log);
    setLogStream((prev) => [
      ...prev,
      {
        type: 'onChange',
        log,
      },
    ]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLogStream((prev) => [
      ...prev,
      {
        type: 'Submit Form',
        log: {
          fullName,
          ...inputsData,
        },
      },
    ]);
  }

  return (
    <main className={styles.main}>
      <Header links={[]}>cmd</Header>
      <div className={styles.content}>
        <div>
          <p>
            For technical researchers and developers who prefer a command-line
            interface, feel free to use the interactive terminal below to
            securely submit queries, test payloads, or interact directly with
            our backend services.
          </p>
          <EvervaultProvider
            teamId={process.env.NEXT_PUBLIC_TEAM_ID}
            appId={process.env.NEXT_PUBLIC_APP_ID}
          >
            <form onSubmit={handleSubmit}>
              <Input
                label='Full name'
                placeholder='Claude Shannon'
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <div className={styles.inputsWrapper}>
                <EvervaultInput
                  onChange={(data) => handleOnChange(data)}
                  config={inputsConfig}
                />
              </div>
              <Button className={styles.submit}>Submit Form</Button>
            </form>
          </EvervaultProvider>
        </div>
        <Console logStream={logStream} title='Client Console' />
      </div>
    </main>
  );
}
