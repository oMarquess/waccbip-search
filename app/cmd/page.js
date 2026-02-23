'use client';
import { useState } from 'react';

import Console from './components/Console/Console';
import Header from '@/components/Header/Header';
import styles from './page.module.css';

export default function Inputs() {
  const [logStream, setLogStream] = useState([
    {
      type: 'system',
      log: 'WACCBIP Backend Integration Terminal v1.0.0. Ready.',
    }
  ]);

  function handleCommand(command) {
    setLogStream((prev) => [
      ...prev,
      { type: 'input', log: `$ ${command}` },
      { type: 'output', log: `Command not found: ${command}. Try 'help' for available commands.` },
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
        </div>
        <Console
          logStream={logStream}
          title='Interactive Terminal'
          onCommandSubmit={handleCommand}
        />
      </div>
    </main>
  );
}
