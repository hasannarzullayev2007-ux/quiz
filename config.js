const SB_URL="https://tjmdnavvohroqglesafa.supabase.co",SB_KEY="sb_publishable_M5f3mcliDvnoLiP_JY3omA_qVpEtyty";
const SUBJ={ona:"Ona tili",eng:"Ingliz tili",arab:"Arab tili",nemis:"Nemis tili",bio:"Biologiya",shaxmat:"Shaxmat"};
const sb=supabase.createClient(SB_URL,SB_KEY);
const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
