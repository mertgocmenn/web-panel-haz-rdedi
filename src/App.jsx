import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart2, Wallet, Settings, History, Zap } from "lucide-react";

export default function MertXPanelProPlus() {
  const [balance, setBalance] = useState(10000);
  const [log, setLog] = useState([]);
  const [leverage, setLeverage] = useState(3);

  const handleTrade = (type) => {
    const pnl = Math.floor(Math.random() * 200 - 100);
    setBalance(balance + pnl);
    setLog([...log, `${type.toUpperCase()} işlemi | PnL: ${pnl} USDT`]);
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-4">
      <h1 className="text-3xl font-bold mb-6">MertX AI Panel PRO+</h1>
      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="mb-4 grid grid-cols-5 gap-2">
          <TabsTrigger value="dashboard"><BarChart2 className="inline mr-2" />Panel</TabsTrigger>
          <TabsTrigger value="signals"><Zap className="inline mr-2" />Sinyaller</TabsTrigger>
          <TabsTrigger value="wallet"><Wallet className="inline mr-2" />Cüzdan</TabsTrigger>
          <TabsTrigger value="logs"><History className="inline mr-2" />Geçmiş</TabsTrigger>
          <TabsTrigger value="settings"><Settings className="inline mr-2" />Ayarlar</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">Genel Durum</h2>
          <p>Kâr/Zarar grafiği, sinyaller ve pozisyonlar burada görüntülenir.</p></CardContent></Card>
        </TabsContent>

        <TabsContent value="signals">
          <Card><CardContent className="p-6 space-y-4"><h2 className="text-xl font-semibold">Sinyal Testi</h2>
          <Button className="w-full" onClick={() => handleTrade('long')}>📈 Long Sinyali</Button>
          <Button className="w-full" variant="destructive" onClick={() => handleTrade('short')}>📉 Short Sinyali</Button>
          </CardContent></Card>
        </TabsContent>

        <TabsContent value="wallet">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold">Cüzdan</h2>
          <p>Bakiye: {balance} USDT</p></CardContent></Card>
        </TabsContent>

        <TabsContent value="logs">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold">İşlem Geçmişi</h2>
          <ul className="list-disc pl-6">{log.map((item, i) => <li key={i}>{item}</li>)}</ul>
          </CardContent></Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card><CardContent className="p-6 space-y-3"><h2 className="text-xl font-semibold">Ayarlar</h2>
          <label>Kaldıraç: <input type="number" defaultValue={leverage} onChange={(e) => setLeverage(e.target.value)} className="ml-2 p-1 border rounded" /></label>
          <label>Coin Limiti: <input type="number" defaultValue={15} className="ml-2 p-1 border rounded" />%</label>
          <Button className="mt-3">Ayarları Kaydet</Button></CardContent></Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}