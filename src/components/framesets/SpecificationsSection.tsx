import { motion } from 'framer-motion';

export default function SpecificationsSection() {
  return (
    <section id="specifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 font-racing text-gray-900">
            <span className="text-[#f87f01]">Technical</span> Specifications
          </h2>
          <div className="w-24 h-1 bg-[#f87f01] mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            LightCarbon Gravel Frameset with Downtube Storage And Integrated Handlebar
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Frame Specifications Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-lg p-6 border border-gray-200"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 border-b border-gray-200 pb-2">Frame</h3>
              <div className="space-y-3">
                <SpecRow label="Material" value="High modulus Toray T700 carbon fiber" />
                <SpecRow label="Size" value="49, 52, 55, 58 (cm)" />
                <SpecRow label="Headtube" value="Straight 1 1/2'' (52mm)" />
                <SpecRow label="Bottom Bracket" value="Threaded T47 *P1.0" />
                <SpecRow label="Weight" value="1110g-1200g (±40g)" highlight />
                <SpecRow label="Tire Clearance" value="700×50C / 650B×2.1'' / 29er×1.95''" />
              </div>
            </motion.div>

            {/* Components Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-lg p-6 border border-gray-200"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 border-b border-gray-200 pb-2">Components</h3>
              <div className="space-y-3">
                <SpecRow label="Fork" value="Carbon fork, 495g±15g" />
                <SpecRow label="Handlebar" value="380/400/420/440mm" />
                <SpecRow label="Stem" value="90/100/110/120mm" />
                <SpecRow label="Seatpost" value="SP02 (25mm) / SP03 (15mm)" />
                <SpecRow label="Dropouts" value="12×100mm / 12×142mm" highlight />
                <SpecRow label="Brake Mount" value="Flat mount disc" />
              </div>
            </motion.div>
          </div>

          {/* Compatibility Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 mb-8"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 border-b border-gray-200 pb-2">Compatibility & Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
              <FeatureItem>Single chainring: max 42T</FeatureItem>
              <FeatureItem>Double chainring: 54/40T - 46/30T</FeatureItem>
              <FeatureItem>Mechanical & Di2 compatible</FeatureItem>
              <FeatureItem>Integrated downtube storage</FeatureItem>
              <FeatureItem>UDH derailleur hanger</FeatureItem>
              <FeatureItem>ISO4210 test standard</FeatureItem>
            </div>
          </motion.div>

          {/* Quality Badge */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="inline-block relative"
            >
              <span 
                className="inline-block px-16 py-4 bg-[#f87f01] text-black font-bold text-lg tracking-wider shadow-xl" 
                style={{ 
                  clipPath: "polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)",
                }}
              >
                <div className="flex items-center justify-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <span>Premium Quality • ISO4210 Certified</span>
                </div>
              </span>
              {/* Accents */}
              <div className="absolute -inset-px bg-white/50 -z-10" 
                  style={{ 
                    clipPath: "polygon(9% 0%, 100% 0%, 91% 100%, 0% 100%)",
                  }}></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface SpecRowProps {
  label: string;
  value: string;
  highlight?: boolean;
}

function SpecRow({ label, value, highlight = false }: SpecRowProps) {
  return (
    <div className="flex justify-between items-start">
      <span className="text-sm font-medium text-gray-500 w-1/3 flex-shrink-0">{label}</span>
      <span className={`text-sm text-right ${highlight ? 'text-[#f87f01] font-semibold' : 'text-gray-800'}`}>
        {value}
      </span>
    </div>
  );
}

function FeatureItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#f87f01] mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
      <span className="text-sm text-gray-700">{children}</span>
    </div>
  );
} 