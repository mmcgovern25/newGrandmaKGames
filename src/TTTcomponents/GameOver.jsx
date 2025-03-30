export default function GameOver({ winner, onRestart }) {
  return (
    <div className="absolute rounded-lg top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-[rgba(34,66,34,0.95)] animate-pop-in">
      <h2 className="mb-4 text-5xl text-center text-[#e1dec7] m-0">Game Over</h2>
      {winner ? (
        <p className="text-2xl mb-4 mt-2 text-center text-[#e1dec7]">{winner} won!</p>
      ) : (
        <p className="text-2xl mt-2 text-center text-[#e1dec7]">It's a draw</p>
      )}
      <p>
        <button
          onClick={onRestart}
          className="block mx-auto text-1.5xl border-2 border-[#1bac08] text-[#1bac08] p-2 rounded-md cursor-pointer transition-all duration-200 hover:bg-[#1bac08] hover:text-[#e1dec7] transform hover:scale-110 shadow-[0_0_8px_rgba(27,172,8,0.4)]"
        >
          Play Again
        </button>
      </p>
    </div>
  );
}
