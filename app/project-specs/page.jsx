'use client';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

export default function ProjectSpecs() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = (data) => {
    localStorage.setItem('projectSpecs', JSON.stringify(data));
    router.push('/brand-names');
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Enter Project Specs</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input {...register('brandIndustry')} placeholder="Industry" className="input" required />
        <input {...register('targetAudience')} placeholder="Target Audience" className="input" required />
        <input {...register('keywords')} placeholder="Keywords (optional)" className="input" />
        <button type="submit" className="bg-primary px-4 py-2 rounded text-white">Generate Names</button>
      </form>
    </div>
  );
}
