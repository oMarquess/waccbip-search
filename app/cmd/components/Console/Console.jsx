import { ChevronUp, Terminal } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import styles from './Console.module.css';
import useResizeConsole from './hooks/useResizeConsole';

export default function Console({ logStream, title, onCommandSubmit }) {
  const logStreamRef = useRef(null);
  const [command, setCommand] = useState('');
  const { startResizing, height, isResizing, toggleMobileExpand } =
    useResizeConsole();

  useEffect(() => {
    const container = logStreamRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [logStream]);

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    if (command.trim() && onCommandSubmit) {
      onCommandSubmit(command);
      setCommand('');
    }
  };

  return (
    <div
      className={styles.container}
      style={{
        height: `${height}px`,
        userSelect: isResizing ? 'none' : 'auto',
      }}
    >
      <div className={styles.resizeHandle} onMouseDown={startResizing} />
      <div className={styles.title}>
        <Terminal width={16} />
        {title}
        <ChevronUp
          className={styles.chevron}
          width={16}
          onClick={toggleMobileExpand}
          data-active={height === 500}
        />
      </div>
      <div className={styles.logStream} ref={logStreamRef}>
        {logStream.map(({ type, log }, index) => {
          return (
            <div className={styles.log} key={log + index}>
              <span className={styles.type}>{type}</span>
              <pre>{typeof log === 'string' ? log : JSON.stringify(log, null, 2)}</pre>
            </div>
          );
        })}
        {onCommandSubmit && (
          <form onSubmit={handleCommandSubmit} className={styles.terminalInputForm}>
            <span className={styles.prompt}>$</span>
            <input
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              className={styles.terminalInput}
              autoFocus
              autoComplete="off"
            />
          </form>
        )}
      </div>
    </div>
  );
}
